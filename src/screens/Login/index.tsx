import React, { useRef, useState } from 'react';
import SvgUri from "expo-svg-uri";
import background from '../../assets/background.svg';
import logo from '../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, Animated, ActivityIndicator } from 'react-native';

import * as S from './styles';

const Login: React.FC = () => {

  const containerY = useRef(new Animated.Value(-0.5)).current;
  const [isLoading, setIsLoading] = useState(false);
  const [secret, setSecret] = useState(true);
  const navigation = useNavigation();

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)

  }

  Animated.spring(containerY, {
    toValue: 0,
    useNativeDriver: true,
    delay: 500
  }).start();

  return(
    <S.Container>
      <SvgUri
        fillAll
        style={{position: 'absolute'}}
        source={background}
      />

      <S.Logo source={logo} />

      <S.BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={34} color="white" />
      </S.BackButton>

      <S.DataContainer
        style = {{
          transform: [
            {
              scale : containerY.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      >

        <S.Title>Log in</S.Title>

        <S.InputContainer>
          <S.Input placeholder="E-mail" keyboardType="email-address" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="Senha" secureTextEntry={secret} />
          <S.PasswordEye onPress={() => setSecret(prev => !prev)}>
            <Ionicons name={secret ? 'eye-outline' : 'eye-off-outline'} size={26} color="#ccc" />
          </S.PasswordEye>
        </S.InputContainer>

        <S.SubmitButton onPress={handleSubmit}>
          {
            isLoading
            ?
            <ActivityIndicator color="#fff" size="large" />
            :
            <S.SubmitText>Entrar</S.SubmitText>
          }

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
