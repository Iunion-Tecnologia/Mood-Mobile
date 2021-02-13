import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';
import Mood from '../../assets/mood.png';

import {Entypo} from '@expo/vector-icons';

const SignIn: React.FC = () => {

  const navigation = useNavigation();

  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />
      <S.Title>Faça seu login</S.Title>
      <Input iconName="mail" placeholder="E-mail"/>
      <Input iconName="lock" placeholder="Senha" />
      <Button>Entrar</Button>

      <S.ForgotButton>
        <S.ForgotPass>Esqueci minha senha</S.ForgotPass>
      </S.ForgotButton>
    </S.Container>
    <S.Bottom onPress={() => navigation.navigate("SignUp")}>
      <Entypo name="login" size={22} color="#6C0FD9" />
      <S.BottomText>Criar uma conta</S.BottomText>
    </S.Bottom>
    </>
  )
}

export default SignIn;
