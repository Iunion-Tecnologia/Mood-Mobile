import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ActivityIndicator, ScrollView, Animated } from 'react-native';
import SvgUri from 'expo-svg-uri';
import background from '../../assets/background.svg';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as S from './styles';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  cpassword: yup
    .string()
    .required()
    .min(8)
    .oneOf([yup.ref('password'), null], "passwords don't match!"),
  nick: yup.string().required(),
});

const Registration: React.FC = () => {
  const navigation = useNavigation();
  const [secret, setSecret] = useState(true);
  const [csecret, csetSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const containerY = useRef(new Animated.Value(-0.5)).current;

  Animated.spring(containerY, {
    toValue: 0,
    useNativeDriver: true,
    delay: 500,
  }).start();

  const handleSignUp = useCallback(async data => {
    setIsLoading(true);

    try {
      const response = await api.post('/user/signup', {
        nick: String(data.nick).toLowerCase(),
        ...data,
      });
      setIsLoading(false);
      navigation.navigate('SignIn');
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Sucesso',
        text2: 'Você foi cadastrado com sucesso, realize seu login!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {},
        onHide: () => {},
        onPress: () => {},
      });
    } catch (error) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error - Signup',
        text2: error.response.data.message,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {},
        onHide: () => {},
        onPress: () => {},
      });
    }
  }, []);

  useEffect(() => {
    register('name');
    register('email');
    register('nick');
    register('password');
    register('cpassword');
  }, [register]);

  return (
    <S.Container>
      <SvgUri
        fillAll
        style={{ position: 'absolute', opacity: 0.5 }}
        source={background}
      />
      <S.Logo source={logo} />

      <S.BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={34} color="white" />
      </S.BackButton>

      <S.DataContainer
        style={{
          transform: [
            {
              scale: containerY.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.Title>Registro</S.Title>

          <S.InputContainer errors={!errors.name?.message}>
            <S.Input
              onChangeText={text => {
                setValue('name', text);
              }}
              placeholder="Nome"
            />
          </S.InputContainer>
          {errors.name?.message && <S.Error>{errors.name?.message}</S.Error>}

          <S.InputContainer errors={!errors.email?.message}>
            <S.Input
              onChangeText={text => {
                setValue('email', text);
              }}
              placeholder="E-mail"
              keyboardType="email-address"
            />
          </S.InputContainer>
          {errors.email?.message && <S.Error>{errors.email?.message}</S.Error>}

          <S.InputContainer errors={!errors.password?.message}>
            <S.Input
              onChangeText={text => {
                setValue('password', text);
              }}
              placeholder="Senha"
              secureTextEntry={secret}
            />
            <S.PasswordEye onPress={() => setSecret(prev => !prev)}>
              <Ionicons
                name={secret ? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color="#ccc"
              />
            </S.PasswordEye>
          </S.InputContainer>
          {errors.password?.message && (
            <S.Error>{errors.password?.message}</S.Error>
          )}

          <S.InputContainer errors={!errors.cpassword?.message}>
            <S.Input
              onChangeText={text => {
                setValue('cpassword', text);
              }}
              placeholder="Confirmação de Senha"
              secureTextEntry={csecret}
            />
            <S.PasswordEye onPress={() => csetSecret(prev => !prev)}>
              <Ionicons
                name={csecret ? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color="#ccc"
              />
            </S.PasswordEye>
          </S.InputContainer>
          {errors.cpassword?.message && (
            <S.Error>{errors.cpassword?.message}</S.Error>
          )}

          <S.InputContainer errors={!errors.nick?.message}>
            <S.Input
              onChangeText={text => {
                setValue('nick', text);
              }}
              placeholder="Nick"
            />
          </S.InputContainer>
          {errors.nick?.message && <S.Error>{errors.nick?.message}</S.Error>}

          <S.SubmitButton onPress={handleSubmit(handleSignUp)}>
            {isLoading ? (
              <ActivityIndicator color="#fff" size="large" />
            ) : (
              <S.SubmitText>Registrar</S.SubmitText>
            )}
          </S.SubmitButton>
        </ScrollView>
      </S.DataContainer>
    </S.Container>
  );
};

export default Registration;
