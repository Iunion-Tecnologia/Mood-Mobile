import React from 'react';
import * as S from './styles';
import Post from '../../components/Post';

import Header from '../../components/Header';

import { FlatList } from 'react-native';

const DATA = [
  {
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Post'
  },
  {
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Post'
  },
    {
    user: 'Jonatha Rihan',
    nick: '@RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4',
    data: 'Post'
  }
]

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
        <Post
          user="Jonatha Rihan da Silva"
          nick="@RBioZ"
          avatar='https://avatars.githubusercontent.com/u/35699301?v=4'
          data="Some data"
        />
        <Post
          user="Jonatha Rihan da Silva"
          nick="@RBioZ"
          avatar="https://avatars.githubusercontent.com/u/2254731?v=4"
          data="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in volup."
        />
    </S.Container>
  );
}

export default Home;
