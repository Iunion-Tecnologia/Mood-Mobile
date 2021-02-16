import React, {useState, useEffect, useCallback} from 'react';
import * as S from './styles';
import Post from '../../components/Post';
import {AntDesign} from '@expo/vector-icons';
import Header from '../../components/Header';
import {FlatList, RefreshControl, Alert, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

interface IPost {
  p_id: string;
  u_name: string;
  p_content: string;
  u_nick: string;
  u_avatar: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [refresh,setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [time, setTime] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = useCallback(async() => {
    setRefresh(true);
    setTime(new Date())
    handleLoadPosts();
    setRefresh(false);
  } ,[time])

  const handleLoadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`/post/feed?page=${page}&limit=10&date=${time}`); //&date=${String(time)}
      setPosts([...posts,...response.data])
      setPage(prev => prev+=1);
      setIsLoading(false);
    }
    catch (error) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar carregar os ultimos posts!');
      setIsLoading(false);
    }
  }, [time, page])

  useEffect(() => {
    handleLoadPosts();
  }, [])

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
            handleLoadPosts();
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
          onEndReachedThreshold={0.1}
          data={posts}
          keyExtractor={(item) => item.p_id}
          renderItem={({item}) => <Post
            user={item.u_name}
            data={item.p_content}
            nick={item.u_nick}
            avatar={item.u_avatar}
          />}
        />

    </S.Container>
  );
}

export default Home;

/*
      <S.PostButton onPress={() => navigation.navigate('PostScreen')}>
        <AntDesign name="form" color="#fff" size={30} />
      </S.PostButton>
*/
