import React, {useEffect, useCallback, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {ActivityIndicator, Alert} from 'react-native';
import * as S from './styles';
import Mood from '../../assets/mood.png';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(8),
  nick: yup.string().required(),
});

const SignUp: React.FC = () => {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, setValue, errors} = useForm({
    resolver: yupResolver(schema)
  });

  const handleSignUp = useCallback(async (data) => {
    try {
      const response = await api.post('/user/signup', data);

      console.log(response.data);

    }
    catch(error){
      Alert.alert('Ocorreu um erro', error.response.message);
    }
  }, []);

  useEffect(() => {
    register('name');
    register('email');
    register('nick');
    register('password');
  }, [register]);

  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />

      <S.Title>Crie sua conta</S.Title>

        <S.InputContainer>
          <Feather name="user" size={20} color="#999" />
          <S.InputText onChangeText={text => {setValue('name', text)}} placeholder="Nome" />
        </S.InputContainer>
        <S.InputContainer>
          <Feather name="mail" size={20} color="#999" />
          <S.InputText onChangeText={text => {setValue('email', text)}} placeholder="E-mail" />
        </S.InputContainer>
        <S.InputContainer>
          <Feather name="lock" size={20} color="#999" />
          <S.InputText onChangeText={text => {setValue('password', text)}} placeholder="Senha" />
        </S.InputContainer>
        <S.InputContainer>
          <Feather name="paperclip" size={20} color="#999" />
          <S.InputText onChangeText={text => {setValue('nick', text)}} placeholder="Nick" />
        </S.InputContainer>

        <S.SubmitContainer onPress={handleSubmit(handleSignUp)}>
          <S.SubmitText>Cadastrar</S.SubmitText>
        </S.SubmitContainer>
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
