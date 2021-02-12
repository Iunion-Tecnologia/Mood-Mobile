import React from 'react';
import * as S from './styles';
import Post from '../../components/Post';
import {AntDesign} from '@expo/vector-icons';
import Header from '../../components/Header';
import {FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '001',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '002',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '003',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '004',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '005',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '006',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    id: '007',
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  }
]

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Post 
            user={item.user} 
            data={item.data} 
            nick={item.nick} 
            avatar={item.avatar} 
          />}
        />
      <S.PostButton onPress={() => navigation.navigate('PostScreen')}>
        <AntDesign name="form" color="#fff" size={30} /> 
      </S.PostButton>
    </S.Container>
  );
}

export default Home;
