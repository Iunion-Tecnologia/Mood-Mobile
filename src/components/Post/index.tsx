import React from 'react';

import * as S from './styles';

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
  }
  navigate(name: string, params: Object): void;
}

const Post: React.FC<IPost> = ({ data, navigate }) => {
  return (
    <S.PostContainer>
      <S.LeftSide>
        <S.Touchable onPress={() => navigate('UserScreen', {id: data.u_id})}>
          <S.Avatar source={{uri: `${data.u_avatar_url}`}}></S.Avatar>
        </S.Touchable>
      </S.LeftSide>
      <S.RightSide>
        <S.PostHeader>
          <S.Touchable onPress={() => navigate('UserScreen', {id: data.u_id})}>
            <S.PostUser>{data.u_name}</S.PostUser>
          </S.Touchable>
          <S.PostNick>@{data.u_nick}</S.PostNick>
        </S.PostHeader>
        <S.Data>
          {data.p_content}
        </S.Data>
        {
          data.p_image_url &&
          <S.Image resizeMode="contain" source={{uri: `${data.p_image_url}`}} />
        }
      </S.RightSide>
    </S.PostContainer>
  )
}

export default Post;
