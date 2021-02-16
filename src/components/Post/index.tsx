import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

interface PostProps {
  id: string;
  user: string;
  nick: string;
  avatar: string;
  data: string;
}

const Post: React.FC<PostProps> = ({id,user,nick,data,avatar}) => {

  const navigation = useNavigation();

  return(
    <S.PostContainer>
      <S.LeftSide>
        <S.Touchable onPress={() => navigation.navigate('UserScreen', {id: '1'})}>
          <S.Avatar source={{uri: `https://lunion-mood.herokuapp.com/files/${avatar}`}}></S.Avatar>
        </S.Touchable>
      </S.LeftSide>
      <S.RightSide>
        <S.PostHeader>
          <S.Touchable onPress={() => navigation.navigate('UserScreen')}>
            <S.PostUser>{user}</S.PostUser>
          </S.Touchable>
          <S.PostNick>@{nick}</S.PostNick>
        </S.PostHeader>
        <S.Data>
          {data}
        </S.Data>
      </S.RightSide>
    </S.PostContainer>
  );
}

export default Post;
