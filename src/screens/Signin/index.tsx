import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import SvgUri from "expo-svg-uri";
import { useForm } from 'react-hook-form';
import background from '../../assets/background.svg';
import logo from '../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Animated, ActivityIndicator, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage';
import {login} from '../../store/ducks/auth/actions';
import api from '../../services/api';
import * as S from './styles';

const SignIn: React.FC = () => {

  const containerY = useRef(new Animated.Value(-0.5)).current;
  const {register, handleSubmit, setValue, errors} = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [secret, setSecret] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmitForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Hello',
        text2: 'This is some something 👋',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {},
        onHide: () => {},
        onPress: () => {}
      });
      setIsLoading(false);
    }, 2000)
  }

  Animated.spring(containerY, {
    toValue: 0,
    useNativeDriver: true,
    delay: 500
  }).start();

  const handleSignIn = useCallback(async(data) => {
    setIsLoading(true);
    try{
      const response = await api.post('/user/signin', data);
      setIsLoading(false);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      await AsyncStorage.setItem('@mood/token', response.data.token);
      await AsyncStorage.setItem('@mood/id', response.data.user.id);
      dispatch(login(response.data));
    }
    catch(error){
      setIsLoading(false);
      Alert.alert(error.response.data.message);
    }
  }, [])

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

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
        <S.Title>Log in</S.Title>

        <S.InputContainer>
          <S.Input onChangeText={text => {setValue('email', text)}} placeholder="E-mail" keyboardType="email-address" />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input onChangeText={text => {setValue('password', text)}} placeholder="Senha" secureTextEntry={secret} />
          <S.PasswordEye onPress={() => setSecret(prev => !prev)}>
            <Ionicons name={secret ? 'eye-outline' : 'eye-off-outline'} size={26} color="#ccc" />
          </S.PasswordEye>
        </S.InputContainer>

        <S.SubmitButton onPress={handleSubmitForm}>
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
        </ScrollView>
      </S.DataContainer>
    </S.Container>
  )
}

export default SignIn;
