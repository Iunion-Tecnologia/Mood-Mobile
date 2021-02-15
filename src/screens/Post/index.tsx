import React, {useEffect, useCallback, useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import api from '../../services/api';
import {useForm} from 'react-hook-form';

const CreatePost: React.FC = () => {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, setValue, errors} = useForm();

  const handlePost = useCallback(async (data) => {
    try{
      const response = await api.post('/post/create', data);
    }
    catch(error){
      Alert.alert('Ocorreu um erro!', error.response.data.message);
      setIsLoading(false);
    }
    
  }, [])

  useEffect(() => {
    register('content')
  }, [register]);

  return(
    <S.Container>

      <Header />

      <S.Input
        onChangeText={text => {setValue('content', text)}}
        multiline
        textAlignVertical="top"
        maxLength={280}
        placeholder="O que está pensando?"
      />
      <S.Button disabled={isLoading} onPress={handleSubmit(handlePost)}>
      {
            isLoading
            ?
            <ActivityIndicator size="large" color="#FFF" />
            :
            <S.ButtonText>Publicar</S.ButtonText>
          }
      </S.Button>
    </S.Container>
  );
}

export default CreatePost;
