import React from 'react';

import * as S from './styles';

interface PostProps {
  user: string;
  nick: string;
  avatar: string;
  data: string;
}

const Post: React.FC<PostProps> = ({user,nick,data,avatar}) => {
  return(
    <S.PostContainer>
      <S.LeftSide>
        <S.Avatar source={{uri: `${avatar}`}}></S.Avatar>
      </S.LeftSide>
      <S.RightSide>
        <S.PostHeader>
          <S.PostUser>{user}</S.PostUser>
          <S.PostNick>{nick}</S.PostNick>
        </S.PostHeader>
        <S.Data>
          {data}
        </S.Data>
      </S.RightSide>
    </S.PostContainer>
  );
}

export default Post;
