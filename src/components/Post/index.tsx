import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';
import timeAgo from '../../utils/time';
import { Octicons, AntDesign } from '@expo/vector-icons';

interface IPost {
  data: {
    u_id: string;
    u_avatar_url: string;
    u_name: string;
    u_nick: string;
    p_id: string;
    p_content: string;
    p_image_url: string | null;
    p_created_at: string;
    p_comment_count: number;
  };
  navigate(name: string, params: Object): void;
  comment(): void;
}

const Post: React.FC<IPost> = ({ data, navigate, comment }) => {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Avatar source={{ uri: data.u_avatar_url }} />
          <S.HeaderData>
            <S.Name>{data.u_nick.toLowerCase()}</S.Name>
            <S.Date>{timeAgo(new Date(data.p_created_at))}</S.Date>
          </S.HeaderData>
        </S.Header>
        <S.ContentContainer>
          {!!data.p_content && <S.Content>{data.p_content}</S.Content>}
          {data.p_image_url && (
            <S.Image
              resizeMode="contain"
              source={{ uri: `${data.p_image_url}` }}
            />
          )}
        </S.ContentContainer>
        <S.Bottom>
          <TouchableOpacity disabled style={{ flexDirection: 'row' }}>
            <S.Comments style={{ color: '#CCC' }}>0</S.Comments>
            <AntDesign name="hearto" size={24} color="#CCC" />
          </TouchableOpacity>
          <TouchableOpacity onPress={comment} style={{ flexDirection: 'row' }}>
            <S.Comments>{data.p_comment_count}</S.Comments>
            <Octicons name="comment" size={24} color="#6C0FD9" />
          </TouchableOpacity>
        </S.Bottom>
      </S.Container>
    </>
  );
};

export default memo(Post);
