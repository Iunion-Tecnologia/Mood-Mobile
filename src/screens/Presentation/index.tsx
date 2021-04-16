import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

const Presentation: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Bem-vindo</S.Title>
      <S.SubTitle>
        Mais que uma rede social,
        Mood é um novo modo de socializar.
      </S.SubTitle>

      <S.SiginButton>
        <S.SignInText>Entrar</S.SignInText>
      </S.SiginButton>

      <S.SignUpButton>
        <S.SignUpText>Registra-se</S.SignUpText>
      </S.SignUpButton>
    </S.Container>
  )
}

export default Presentation;
