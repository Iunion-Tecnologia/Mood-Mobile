import React from 'react';
import SvgUri from "expo-svg-uri";
import background from '../../assets/background.svg';

import * as S from './styles';

const Presentation: React.FC = () => {
  return (
    <S.Container>

      <SvgUri
        fillAll
        style={{position: 'absolute'}}
        source={background}
      />

      <S.InfoContainer>
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
      </S.InfoContainer>
    </S.Container>
  )
}

export default Presentation;
