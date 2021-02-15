import React, {useState, useEffect, useCallback} from 'react';
import * as S from './styles';
import Post from '../../components/Post';
import {AntDesign} from '@expo/vector-icons';
import Header from '../../components/Header';
import {FlatList, RefreshControl, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const DATA = [
  {
    id: '001',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
]

interface IPost {
  id: string;
  user: string;
  data: string;
  nick: string;
  avatar: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [time,setTime] = useState(new Date());
  const [refresh,setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleRefresh = () => {
    setRefresh(true)
    setTime(new Date());
    setRefresh(false)
  }

  const handleLoadPosts = useCallback(async () => {
    try {
      const response = await api.get(`/post/feed?page=${page}&limit=10&date=${String(time)}`);
      setPosts([...posts, response.data])
    }
    catch (error) {
      Alert.alert('Error', 'Ocorreu um erro ao tentar carregar os ultimos posts!');
      console.log(error);
    }
    
  }, [])

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
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Post
            user={item.user}
            data={item.data}
            nick={item.nick}
            avatar={item.avatar}
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
