import React from 'react';
import SvgUri from "expo-svg-uri";
import background from '../../assets/background.svg';
import logo from '../../assets/logo.png';
import { Text } from 'react-native';

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

        <S.RememberContainer>
          <S.RememberButton />
          <S.RememberText>Lembrar minha senha</S.RememberText>
        </S.RememberContainer>

        <S.ForgotPassButton>
          <S.ForgotPassText>Esqueceu a senha? <Text style={{color: '#6C0FD9'}}>Clique aqui.</Text></S.ForgotPassText>
        </S.ForgotPassButton>

      </S.DataContainer>
    </S.Container>
  )
}

export default Login;
