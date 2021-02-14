import React from 'react';

import * as S from './styles';

import Mood from '../../assets/logo.png';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/ducks/auth/actions';

const Header: React.FC = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return(
    <S.Container>
      <S.Button>
        <Ionicons name="search" size={27} color="#6C0FD9" />
      </S.Button>

      <S.Logo resizeMode="contain" source={Mood} />
      <S.Button onPress={() => handleLogout()}>
        <MaterialCommunityIcons name="logout" size={26} color="#E02041" />
      </S.Button>

    </S.Container>
  )
}

export default Header;
