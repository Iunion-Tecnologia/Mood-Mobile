import React, {useState, useEffect, useCallback} from 'react';
import * as S from './styles';
import Post from '../../components/Post'
import {FlatList, RefreshControl, Alert, ActivityIndicator, VirtualizedList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommentModal from '../../components/Comment';
import api from '../../services/api';

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
  const [refresh,setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [time, setTime] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [shuldLoad, setShuldLoad] = useState(true);
  const [postId, setPostId] = useState('')
  const [comment, setComment] = useState(false);

  const handleRefresh = useCallback(async() => {
    setRefresh(true);
    setTime(new Date())
    setShuldLoad(true);
    setIsLoading(true);
    try {
      const response = await api.get(`/post/feed?page=${0}&limit=10&date=${new Date()}`);
      setPosts(response.data)
      setPage(1);
    }
    catch (error) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar carregar os ultimos posts!');
    }
    setIsLoading(false);
    setRefresh(false);
  } ,[time])

  const handleLoadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`/post/feed?page=${page}&limit=10&date=${time}`); //&date=${String(time)}
      !response.data.length && setShuldLoad(false)
      setPosts([...posts,...response.data])
      setPage(prev => prev+=1);
      setIsLoading(false);
    }
    catch (error) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar carregar os ultimos posts!');
      setIsLoading(false);
    }
  }, [time, page])

  const handleComment = useCallback((id: string) => {
    setPostId(id);
    setComment(true);
  }, [])

  useEffect(() => {
    handleLoadPosts();
  }, [])

  return (
    <S.Container>
        <CommentModal onRequestClose={() => setComment(false)} postId={postId} visible={comment} animationType="slide" />
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
          keyExtractor={(item) => item.p_id}
          renderItem={({item}) => <Post data={item} navigate={navigation.navigate} comment={() => handleComment(item.p_id)} />}
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
