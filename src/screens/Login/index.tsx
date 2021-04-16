import React from 'react';
import SvgUri from "expo-svg-uri";
import background from '../../assets/background.svg';
import logo from '../../assets/logo.png';

import * as S from './styles';

const Login: React.FC = () => {
  return(
    <S.Container>
      <SvgUri
        fillAll
        style={{position: 'absolute'}}
        source={background}
      />

      <S.Logo source={logo} />

      <S.DataContainer>

        <S.Title>Log in</S.Title>

        <S.InputContainer>
          <S.Input placeholder="E-mail" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="Senha" />
        </S.InputContainer>

        <S.SubmitButton>
          <S.SubmitText>Entrar</S.SubmitText>
        </S.SubmitButton>

      </S.DataContainer>
    </S.Container>
  )
}

export default Login;
