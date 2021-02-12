import React from 'react';
import {Feather} from '@expo/vector-icons';
import * as S from './styled';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  iconName: string;
}

const Input: React.FC<InputProps> = ({iconName = 'x', placeholder}) => {
  return (
    <S.Container>
      <Feather name="airplay" size={24} color="#999" />
      <S.TextInput placeholder={placeholder}></S.TextInput>
    </S.Container>
  );
}

export default Input;
