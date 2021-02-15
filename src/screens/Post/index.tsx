import React, {} from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {useAsyncStorage} from '@react-native-community/async-storage';

const CreatePost: React.FC = () => {

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('[SUBMIT]');
  }

  return(
    <S.Container>

      <Header />

      <S.Input
        multiline
        textAlignVertical="top"
        maxLength={280}
        placeholder="O que está pensando?"
      />
      <S.Button>
        <S.ButtonText>Publicar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

export default CreatePost;
