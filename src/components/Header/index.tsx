import React from 'react';

import * as S from './styles';

import Mood from '../../assets/logo.png';

const Header: React.FC = () => {
  return(
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />
    </S.Container>
  )
}

export default Header;
