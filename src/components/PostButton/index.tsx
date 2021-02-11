import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

const PostButton: React.FC = () => {
  return (
    <S.ButtonContainer>
      <Ionicons name="add-circle-outline" color="#fff" size={44} />
    </S.ButtonContainer>
  )
}

export default PostButton;
