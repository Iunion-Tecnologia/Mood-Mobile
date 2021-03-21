import React, {useEffect, useCallback, useState} from 'react';
import {Alert, ActivityIndicator, Keyboard, ScrollView} from 'react-native';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import api from '../../services/api';
import {useForm} from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'

interface IUser {
  id: string,
  name: string,
  nick: string,
  avatar_url: string | null;
  bio: string | null;
  followers_count: number,
  following_count: number,
  post_count: number,
}

const CreatePost: React.FC = () => {

  const navigation = useNavigation();
  const auth = useSelector((state: ApplicationState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, setValue} = useForm();
  const [image, setImage] = useState<ImageInfo>();
  const [profile, setProfile] = useState<IUser>()

  const handleLoadProfile = useCallback(async() => {
    try {
      const response = await api.get(`/user/profile/${auth.user?.id}`);
      setProfile(response.data.user);
    }
    catch(error){
      console.log(error);
    }

  }, [auth])

  const openImagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  }

  const handleUploadImage = useCallback(async () =>  {
  
    try {
      let formData = new FormData();

      formData.append('avatar', {
        uri: image?.uri,
        name: `photo.jpeg`,
        type: `image/jpeg`,
      });
  
      const response = await api.patch('/user/avatar', formData, {headers:{
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    })  
    }
    catch(error){
    }
  }, [image])
  
  const handlePost = useCallback(async (data) => {
    setIsLoading(true);
    try{
      await api.patch('/user/update', data);
      image && handleUploadImage();
      setIsLoading(false);
      Keyboard.dismiss();
      navigation.goBack();
    }
    catch(error){
      Alert.alert('Ocorreu um erro!', error.response.data.message);
      setIsLoading(false);
    }

  }, [image])

  useEffect(() => {
    register('bio');
    handleLoadProfile();
  }, [register]);

  return(
    <S.Container>

      <Header />

      <ScrollView>

      <S.Title>Avatar</S.Title>

      <S.AvatarButton onPress={openImagePickerAsync}>

        {
          image
          ?
          <S.Avatar source={{uri: image.uri}} />
          :
          <>
          {
            profile?.avatar_url
            ?
            <S.Avatar source={{uri: `${profile?.avatar_url}`}} />
            :
            <S.AvatarPlaceholder>
              <Entypo name="camera" size={24} color="black" />
            </S.AvatarPlaceholder>
          }
          </>

        }

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
