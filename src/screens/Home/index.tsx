import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import Post from '../../components/Post';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useComment } from '../../hooks/comment';
import Toast from 'react-native-toast-message';

interface IPost {
  u_id: string;
  p_id: string;
  u_name: string;
  p_content: string;
  p_image_url: string | null;
  p_created_at: string;
  u_nick: string;
  u_avatar_url: string;
  p_comment_count: number;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [time, setTime] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [shuldLoad, setShuldLoad] = useState(true);
  const { openModal } = useComment();

  const handleRefresh = useCallback(async () => {
    setRefresh(true);
    setTime(new Date());
    setShuldLoad(true);
    setIsLoading(true);
    try {
      const response = await api.get(
        `/post/feed?page=${0}&limit=10&date=${new Date()}`,
      );
      setPosts(response.data);
      setPage(1);
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Ocorreu um erro ao tentar carregar os ultimos posts!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {},
        onHide: () => {},
        onPress: () => {},
      });
    }
    setIsLoading(false);
    setRefresh(false);
  }, [time]);

  const handleLoadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `/post/feed?page=${page}&limit=10&date=${time}`,
      ); //&date=${String(time)}
      !response.data.length && setShuldLoad(false);
      setPosts([...posts, ...response.data]);
      setPage(prev => (prev += 1));
      setIsLoading(false);

      if (!response.data.length && page === 0) {
        console.log(!response.data.length);
        console.log(page);
        Toast.show({
          type: 'info',
          position: 'top',
          text1: 'Info',
          text2: 'Pesquise e siga os usuários para que seu feed tenha posts!',
          visibilityTime: 8000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
          onPress: () => {},
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Ocorreu um erro ao tentar carregar os ultimos posts!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {},
        onHide: () => {},
        onPress: () => {},
      });
      setIsLoading(false);
    }
  }, [time, page]);

  useEffect(() => {
    handleLoadPosts();
  }, []);

  return (
    <S.Container>
      <Header />
      <FlatList
        refreshControl={
          <RefreshControl
            colors={['#6C0FD9']}
            tintColor="#6C0FD9"
            refreshing={refresh}
            onRefresh={handleRefresh}
          />
        }
        onEndReached={() => {
          shuldLoad && handleLoadPosts();
        }}
        ListFooterComponent={() => {
          if (!isLoading) return null;
          return (
            <ActivityIndicator
              animating={isLoading}
              style={{ height: 50 }}
              size="large"
              color="#6C0FD9"
            />
          );
        }}
        onEndReachedThreshold={0.01}
        data={posts}
        keyExtractor={item => item.p_id}
        renderItem={({ item }) => (
          <Post
            data={item}
            navigate={navigation.navigate}
            comment={() => openModal(item.p_id)}
          />
        )}
      />
    </S.Container>
  );
};

export default Home;

/*
      <S.PostButton onPress={() => navigation.navigate('PostScreen')}>
        <AntDesign name="form" color="#fff" size={30} />
      </S.PostButton>
*/
