import React, {useEffect, useCallback, useState} from 'react';
import {Alert, ActivityIndicator, Keyboard, ScrollView} from 'react-native';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import api from '../../services/api';
import {useForm} from 'react-hook-form';
import { Entypo} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreatePost: React.FC = () => {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const {register, handleSubmit, setValue, errors} = useForm();

  const handlePost = useCallback(async () => {
    setIsLoading(true);
    try{
      const form = new FormData();
      form.append('avatar', image);
      await api.patch('/user/avatar', {
        uri: 'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMood-1bd2e073-8614-46a8-83d9-48a341770226/ImagePicker/9956a201-b6cc-4bd4-a180-d19bfc5b78e0.jpg',
        type: 'jpg',
        name: 'name',
        }
      );
      setIsLoading(false);
      Alert.alert('Sucesso!', 'Seu post foi criado');
      Keyboard.dismiss();
      navigation.navigate('Home');
    }
    catch(error){
      console.log(error)
      Alert.alert('Ocorreu um erro!', error.response.data.message);
      setIsLoading(false);
    }

  }, [image])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    register('content')
  }, [register]);

  return(
    <S.Container>

      <Header />

      <ScrollView>

      <S.Title>Avatar</S.Title>

      <S.AvatarButton onPress={pickImage}>
        {
          image
          ?
          <S.Avatar source={{ uri: image }} />
          :
          <S.AvatarPlaceholder>
            <Entypo name="camera" size={24} color="black" />
          </S.AvatarPlaceholder>
        }

      </S.AvatarButton>

      <S.Title>Bio</S.Title>

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
            <S.ButtonText>Editar Perfil</S.ButtonText>
          }
      </S.Button>
      </ScrollView>
    </S.Container>
  );
}

export default CreatePost;
