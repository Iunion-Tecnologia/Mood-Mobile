import React, { useState, useRef } from 'react';
import { ActivityIndicator, ScrollView, Animated } from 'react-native';
import SvgUri from "expo-svg-uri";
import background from '../../assets/background.svg';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';

import * as S from './styles';

const Registration: React.FC = () => {

  const navigation = useNavigation();
  const [secret, setSecret] = useState(true);
  const [csecret, csetSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const containerY = useRef(new Animated.Value(-0.5)).current;

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
        <ScrollView showsVerticalScrollIndicator={false}>
        <S.Title>Registro</S.Title>

        <S.InputContainer>
          <S.Input placeholder="Nome" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="E-mail" keyboardType="email-address" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="Senha" secureTextEntry={secret} />
          <S.PasswordEye onPress={() => setSecret(prev => !prev)}>
            <Ionicons name={secret ? 'eye-outline' : 'eye-off-outline'} size={26} color="#ccc" />
          </S.PasswordEye>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="Confirmação de Senha" secureTextEntry={csecret} />
          <S.PasswordEye onPress={() => csetSecret(prev => !prev)}>
            <Ionicons name={csecret ? 'eye-outline' : 'eye-off-outline'} size={26} color="#ccc" />
          </S.PasswordEye>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input placeholder="Nick" />
        </S.InputContainer>

        <S.SubmitButton onPress={handleSubmit}>
          {
            isLoading
            ?
            <ActivityIndicator color="#fff" size="large" />
            :
            <S.SubmitText>Registrar</S.SubmitText>
          }
        </S.SubmitButton>
        </ScrollView>
      </S.DataContainer>
    </S.Container>
  )
}

export default Registration;
