import React from 'react';

import * as S from './styles';

import Mood from '../../assets/logo.png';
import {Feather, Ionicons} from '@expo/vector-icons';

const Header: React.FC = () => {
  return(
    <S.Container>
      <S.Button>
        <Ionicons name="search" size={27} color="#6C0FD9" />
      </S.Button>

      <S.Logo resizeMode="contain" source={Mood} />
      <S.Button>
        <Feather name="settings" size={24} color="#6C0FD9" />
      </S.Button>

    </S.Container>
  )
}

export default Header;
