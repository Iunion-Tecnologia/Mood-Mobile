import React, {} from 'react';
import * as S from './styles';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const CreatePost: React.FC = () => {

  const navigation = useNavigation();

  return(
    <S.Container>
      <S.Header>
        <S.BackHeader onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back-outline" size={30} color="#fff" />
        </S.BackHeader>
        <S.HeaderTitle>Criar Post</S.HeaderTitle>
      </S.Header>
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
