import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import * as S from './styles';
import Mood from '../../assets/mood.png';
import {useForm} from 'react-hook-form';
import {Feather, Entypo} from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {login} from '../../store/ducks/auth/actions';
import {ApplicationState} from '../../store';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();
  const {register, handleSubmit, setValue, errors} = useForm({
    resolver: yupResolver(schema)
  });
  

  const handleSignIn = useCallback(async(data) => {
    setIsLoading(true);
    try{
      const response = await api.post('/user/signin', data);
      setIsLoading(false);
      await AsyncStorage.setItem('@mood/token', response.data.token);
      dispatch(login(response.data));
    }
    catch(error){
      Alert.alert(error.response.data.message);
    } 
    setIsLoading(false);
  }, [])

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />
      <S.Title>Faça seu login</S.Title>

        <S.InputContainer style={{borderColor: errors.email?.message ? '#f00' : '#ddd'}}>
          <Feather name="mail" size={20} color="#999" />
          <S.InputText onChangeText={text => {setValue('email', text)}} placeholder="E-mail" />
        </S.InputContainer>
        <S.InputContainer style={{borderColor: errors.password?.message ? '#f00' : '#ddd'}}>
          <Feather name="lock" size={20} color="#999" />
          <S.InputText secureTextEntry={secure} onChangeText={text => {setValue('password', text)}} placeholder="Senha" />
          <S.PassButton onPress={() => setSecure(e => !e)}>
            <Feather name={secure ? 'eye' : 'eye-off'} size={20} color="#999" />
          </S.PassButton>
        </S.InputContainer>
        <S.SubmitContainer disabled={isLoading} onPress={handleSubmit(handleSignIn)}>
          {
            isLoading
            ?
            <ActivityIndicator size="large" color="#FFF" />
            :
            <S.SubmitText>Entrar</S.SubmitText>
          }
          
        </S.SubmitContainer>
      
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
