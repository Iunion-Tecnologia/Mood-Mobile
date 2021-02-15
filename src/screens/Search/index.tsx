import React from 'react';
import Header from '../../components/Header'
import {FlatList, View} from 'react-native';
import { Feather } from '@expo/vector-icons'

import * as S from './styles';

const DATA = [
  {
    id: '12345',
    name: 'Jonatha Rihan da Silva',
    nick: 'RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4'
  },
  {
    id: '12346',
    name: 'Jonatha Rihan da Silva',
    nick: 'RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4'
  },
  {
    id: '12347',
    name: 'Jonatha Rihan da Silva',
    nick: 'RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4'
  }
]

const Search: React.FC = () => {
  return(
    <S.Container>
      <Header />
      <S.SearchBar>
        <S.SearchInput placeholder="Pesquisar">

        </S.SearchInput>
        <S.Button>
          <Feather name="search" color="#6C0FD9" size={30} />
        </S.Button>
      </S.SearchBar>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <S.Item>
            <S.ItemLeft>
              <S.ItemAvatar source={{uri: item.avatar}} />
            </S.ItemLeft>
            <S.ItemRight>
              <S.ItemNick>RBioZ</S.ItemNick> 
              <S.ItemName>Jonatha Rihan da Silva</S.ItemName>
            </S.ItemRight>
          </S.Item>
        )
      }
      />

    </S.Container>
  )
}

export default Search;
