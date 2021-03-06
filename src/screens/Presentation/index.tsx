import React from 'react';
import SvgUri from 'expo-svg-uri';
import background from '../../assets/background.svg';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';

import * as S from './styles';

const Presentation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <SvgUri
        fillAll
        style={{ position: 'absolute', opacity: 0.5 }}
        source={background}
      />

      <S.Logo source={logo} />

      <S.InfoContainer>
        <S.Title>Bem-vindo</S.Title>
        <S.SubTitle>
          Mais que uma rede social, Mood é um novo modo de socializar.
        </S.SubTitle>

        <S.SiginButton onPress={() => navigation.navigate('SignIn')}>
          <S.SignInText>Entrar</S.SignInText>
        </S.SiginButton>

        <S.SignUpButton onPress={() => navigation.navigate('SignUp')}>
          <S.SignUpText>Registra-se</S.SignUpText>
        </S.SignUpButton>
      </S.InfoContainer>
    </S.Container>
  );
};

export default Presentation;
