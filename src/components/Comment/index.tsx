import React, { useEffect, useCallback, useState } from 'react';
import { Modal, ModalProps, FlatList } from 'react-native';
import { useComment } from '../../hooks/comment';
import Toast from 'react-native-toast-message';
import { ApplicationState } from '../../store';
import { useForm, useController } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import * as S from './styles';
import timeAgo from '../../utils/time';
import { Keyboard } from 'react-native';

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

const Input = ({ control }: { control: any }): JSX.Element => {
  const { field } = useController({
    control,
    defaultValue: '',
    name: 'content',
  });

  return (
    <S.Input
      value={field.value}
      onChangeText={field.onChange}
      placeholder="Insira seu comentário..."
    />
  );
};

const Comment: React.FC<IComment> = () => {
  const { postId, isOpen, closeModal } = useComment();
  const { register, handleSubmit, control, reset } = useForm();
  const [comments, setComments] = useState<IUserComment[]>([]);
  const auth = useSelector((state: ApplicationState) => state.auth);

  const handleLoadComments = useCallback(async () => {
    try {
      const response = await api.get(`/post/comment/${postId}`);
      setComments(response.data);
    } catch (error) {}
  }, [postId]);

  const handleComment = useCallback(
    async data => {
      reset({
        content: '',
      });
      Keyboard.dismiss();
      try {
        const response = await api.post(`/post/comment/${postId}`, data);

        let userComment: IUserComment = {
          id: response.data.id,
          comment: response.data.content,
          created_at: response.data.created_at,
          user_avatar_url: String(auth.user?.avatar_url),
          user_id: String(auth.user?.id),
          user_name: String(auth.user?.name),
          user_nick: String(auth.user?.nick),
        };

        setComments(prev => [...prev, userComment]);
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error - Comment',
          text2: error.response.data.message,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
          onPress: () => {},
        });
      }
    },
    [postId],
  );

  useEffect(() => {
    register('content');
    handleLoadComments();
  }, [postId, register]);

  return (
    <Modal
      animationType="slide"
      onRequestClose={closeModal}
      transparent
      visible={isOpen}
    >
      <S.Background>
        <S.Container>
          <S.Header>
            <S.Title>Comentários</S.Title>
          </S.Header>

          <FlatList
            data={comments}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <S.CommentContainer>
                <S.CommentHeader>
                  <S.CommentAvatar
                    source={{ uri: `${item.user_avatar_url}` }}
                  />
                  <S.CommentHeaderContainer>
                    <S.CommentNick>
                      {item.user_nick.toLowerCase()}
                    </S.CommentNick>
                    <S.CommentTime>{timeAgo(item.created_at)}</S.CommentTime>
                  </S.CommentHeaderContainer>
                </S.CommentHeader>
                <S.CommentContent>{item.comment}</S.CommentContent>
              </S.CommentContainer>
            )}
          />

          <S.BottomContainer>
            <S.InputContainer>
              <Input control={control} />
              <S.Button onPress={handleSubmit(handleComment)}>
                <Ionicons name="send-sharp" size={30} color="#6C0FD9" />
              </S.Button>
            </S.InputContainer>
          </S.BottomContainer>
        </S.Container>
      </S.Background>
    </Modal>
  );
};

export default Comment;
