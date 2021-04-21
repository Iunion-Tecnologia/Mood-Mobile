import React, { useEffect, useCallback, useState } from 'react';
import { Modal, ModalProps, FlatList, PanResponder } from 'react-native';
import Toast from 'react-native-toast-message';
import { ApplicationState } from '../../store';
import { useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import * as S from './styles';
import timeAgo from '../../utils/time';

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
  const auth = useSelector((state: ApplicationState) => state.auth);
  const [comments, setComments] = useState<IUserComment[]>([]);

  const handleLoadComments = useCallback(async () => {
    try {
      const response = await api.get(`/post/comment/${postId}`);
      setComments(response.data);
    } catch (error) {}
  }, [postId]);

  const handleComment = useCallback(
    async data => {
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

        setComments(prev => [userComment, ...prev]);
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
    <Modal transparent {...rest}>
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
              <S.Input
                placeholder="Insira um comentário..."
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
      </S.Background>
    </Modal>
  );
};

export default Comment;
