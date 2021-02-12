import React from 'react';
import {Feather} from '@expo/vector-icons';
import * as S from './styled';

const Button: React.FC = ({children}) => {
  return (
    <S.Container>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
}

export default Button;
