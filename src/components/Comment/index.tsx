import React, { useEffect, useCallback, useState } from 'react';
import { Modal, ModalProps, FlatList } from 'react-native';
import { useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import api from '../../services/api';
import * as S from './styles';

interface IComment extends ModalProps {
  postId: string;
}

interface IUserComment {
  id: string;
  comment: string;
  created_at: string;
  user_id: string;
  user_name: string;
  user_nick: string;
  user_avatar_url: string | null;
}

const Comment: React.FC<IComment> = ({ postId, ...rest }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [comments, setComments] = useState([]);

  const handleLoadComments = useCallback(async () => {
    try {
      const response = await api.get(`/post/comment/${postId}`);
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log('Error');
    }
  }, [postId]);

  const handleComment = useCallback(
    async data => {
      try {
        const response = await api.post(`/post/comment/${postId}`, data);
        console.log(response.data);
      } catch (error) {
        console.log('Error');
      }
    },
    [postId],
  );

  useEffect(() => {
    register('content');
    handleLoadComments();
  }, []);

  return (
    <Modal transparent {...rest}>
      <S.Container>
        <S.Title>{postId}</S.Title>

        <FlatList
          data={comments}
          keyExtractor={(item, index) => String(index)}
          renderItem={() => <S.CommentContainer />}
        />

        <S.BottomContainer>
          <S.InputContainer>
            <S.Input
              onChangeText={text => {
                setValue('content', text);
              }}
            />
            <S.Button onPress={handleSubmit(handleComment)}>
              <Ionicons name="send-sharp" size={30} color="#6C0FD9" />
            </S.Button>
          </S.InputContainer>
        </S.BottomContainer>
      </S.Container>
    </Modal>
  );
};

export default Comment;
