import React, { useEffect, useCallback, useState } from 'react';
import { Alert, ActivityIndicator, Keyboard, ScrollView } from 'react-native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import api from '../../services/api';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useForm, useController } from 'react-hook-form';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import Toast from 'react-native-toast-message';

const Input = ({ control }: { control: any }) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name: 'content',
  });
  return (
    <S.Input
      value={field.value}
      onChangeText={field.onChange}
      multiline
      textAlignVertical="top"
      maxLength={280}
      placeholder="O que está pensando?"
      selectTextOnFocus={true}
    />
  );
};

const CreatePost: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, control, reset } = useForm();
  const [image, setImage] = useState<ImageInfo | null>();

  const handlePost = useCallback(
    async data => {
      setIsLoading(true);
      try {
        let formData = new FormData();

        if (image !== undefined) {
          formData.append(
            'image',
            JSON.parse(
              JSON.stringify({
                uri: image?.uri,
                type: 'image/jpeg',
                name: 'image.jpeg',
              }),
            ),
          );
        }

        formData.append('content', data.content ?? '');

        const response = await api.post('/post/create', formData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        });

        setIsLoading(false);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Sucesso',
          text2: 'Seu post foi criado com sucesso!',
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
          onPress: () => {},
        });
        Keyboard.dismiss();
        navigation.navigate('Home');
        reset({ content: '' });
        setImage(null);
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: 'Ocorreu um erro ao criar o seu post! tente novamente.',
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
          onPress: () => {},
        });
        setIsLoading(false);
      }
    },
    [image],
  );

  const openImagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  useEffect(() => {
    register('content');
  }, [register]);

  return (
    <S.Container>
      <Header />
      <ScrollView>
        <S.ImageButton onPress={() => openImagePickerAsync()}>
          {image ? (
            <S.Image resizeMode="contain" source={{ uri: image.uri }} />
          ) : (
            <Entypo name="camera" size={50} color="rgba(0,0,0,0.2)" />
          )}
        </S.ImageButton>

        <Input control={control} />

        <S.Button disabled={isLoading} onPress={handleSubmit(handlePost)}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <S.ButtonText>Publicar</S.ButtonText>
          )}
        </S.Button>
      </ScrollView>
    </S.Container>
  );
};

export default CreatePost;
