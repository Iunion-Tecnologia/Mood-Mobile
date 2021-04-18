import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

interface IComment extends ModalProps {
  postId: string;
}

const Comment: React.FC<IComment> = ({postId, ...rest}) => {
  return (
    <Modal {...rest}>
      <S.Container>
        <S.Title>{postId}</S.Title>

        <S.BottomContainer>
          <S.InputContainer>
            <S.Input />
            <S.Button>
              <Ionicons name="send-sharp" size={30} color="#6C0FD9" />
            </S.Button>
          </S.InputContainer>
        </S.BottomContainer>
      </S.Container>
    </Modal>
  )
}

export default Comment;
