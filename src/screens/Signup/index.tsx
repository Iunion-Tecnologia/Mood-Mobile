import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';
import Mood from '../../assets/mood.png';

import {MaterialIcons} from '@expo/vector-icons';

const SignUp: React.FC = () => {

  const navigation = useNavigation();

  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />

      <S.Title>Crie sua conta</S.Title>

        <Input iconName="user" placeholder="Nome"/>
        <Input iconName="mail" placeholder="E-mail" />
        <Input iconName="paperclip" placeholder="Nick" />
        <Input iconName="lock" placeholder="Senha" />
      <Button>Cadastrar</Button>
    </S.Container>
    <S.Bottom onPress={() => navigation.navigate('SignIn')}>
      <MaterialIcons name="arrow-back" size={24} color="#6C0FD9" />
      <S.BottomText>
        Voltar para logon
      </S.BottomText>
    </S.Bottom>
    </>
  )
}

export default SignUp;
