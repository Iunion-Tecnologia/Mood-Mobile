import React, {useEffect, useCallback, useState} from 'react';
import {Alert, ActivityIndicator, Keyboard, ScrollView} from 'react-native';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import api from '../../services/api';
import {useForm} from 'react-hook-form';
import { Entypo} from '@expo/vector-icons';

const CreatePost: React.FC = () => {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, setValue} = useForm();

  const handlePost = useCallback(async (data) => {
    setIsLoading(true);
    try{
      await api.patch('/user/update', data);
      setIsLoading(false);
      Keyboard.dismiss();
      navigation.goBack();
    }
    catch(error){
      Alert.alert('Ocorreu um erro!', error.response.data.message);
      setIsLoading(false);
    }

  }, [])

  useEffect(() => {
    register('bio');
  }, [register]);

  return(
    <S.Container>

      <Header />

      <ScrollView>

      <S.Title>Avatar</S.Title>

      <S.AvatarButton>

        <S.AvatarPlaceholder>
          <Entypo name="camera" size={24} color="black" />
        </S.AvatarPlaceholder>


      </S.AvatarButton>

      <S.Title>Bio</S.Title>

      <S.Input
        onChangeText={text => {setValue('bio', text)}}
        multiline
        textAlignVertical="top"
        maxLength={280}
        placeholder=""
      />
      <S.Button disabled={isLoading} onPress={handleSubmit(handlePost)}>
      {
            isLoading
            ?
            <ActivityIndicator size="large" color="#FFF" />
            :
            <S.ButtonText>Editar Perfil</S.ButtonText>
          }
      </S.Button>
      </ScrollView>
    </S.Container>
  );
}

export default CreatePost;
