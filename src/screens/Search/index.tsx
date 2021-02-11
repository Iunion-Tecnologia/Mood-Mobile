import React from 'react';
import Header from '../../components/Header'
import { Feather } from '@expo/vector-icons'

import * as S from './styles';

const Search: React.FC = () => {
  return(
    <S.Container>
      <Header></Header>
      <S.SearchBar>
        <S.SearchInput>

        </S.SearchInput>
        <S.Button>
          <Feather name="search" color="#6C0FD9" size={30} />
        </S.Button>
      </S.SearchBar>
    </S.Container>
  )
}

export default Search;
