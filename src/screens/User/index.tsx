import React, {useEffect, useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import { RouteProp, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import * as S from './styles';

interface IUser {
  id: string,
  name: string,
  nick: string,
  avatar: string | null;
  bio: string | null;
  followers_count: number,
  following_count: number,
  post_count: number,
}

interface IPost {
  id: string;
  content: string;
}

const DATA = [
  {
    id: "1",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "2",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "3",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "4",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "5",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "6",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "7",
    content: "Isto é o primeiro post post do aplicativo!",
  },
  {
    id: "8",
    content: "Isto é o primeiro post post do aplicativo!",
  }
]

const User: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const [status, setStatus] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>();
  const route = useRoute<
  RouteProp<{ params: { id: string } }, 'params'>
>();

  const handleLoadProfile = useCallback(async() => {
    try {
      const response = await api.get(`/user/profile/${route.params.id}`);
      setUser(response.data.user);
      setStatus(response.data.is_following);
    }
    catch(error){ 
      console.log(error);
    }

  }, [route])

  const handleLoadPosts = useCallback(async () => {
    try{
      const response = await api.get(`/post/user/${route.params.id}`);
      setPosts(response.data);
    }
    catch(error){
      console.log(error);
    }
  }, [])

  useEffect(() => {
    handleLoadProfile();
    handleLoadPosts();
  }, [])

  return (
    <S.Container>
      <Header />
      <FlatList
        ListHeaderComponent={() => (
          <S.InfoContainer>
          <S.TopInfo>
            <S.ProfileImage source={{uri: `https://lunion-mood.herokuapp.com/files/${user?.avatar}`}} />
            <S.DataContainer>
              <S.Data>
                <S.DataNumber>{user?.post_count}</S.DataNumber>
                <S.DataName>Posts</S.DataName>
              </S.Data>
              <S.Data>
                <S.DataNumber>{user?.followers_count}</S.DataNumber>
                <S.DataName>Seguidores</S.DataName>
              </S.Data>
              <S.Data>
                <S.DataNumber>{user?.following_count}</S.DataNumber>
                <S.DataName>Seguindo</S.DataName>
              </S.Data>
            </S.DataContainer>
          </S.TopInfo>
          
          <S.ProfileName>{user?.name}</S.ProfileName>
          <S.ProfileNick>@{user?.nick}</S.ProfileNick>
  
          <S.ProfileDescription>{user?.bio}</S.ProfileDescription>
          <S.ButtonBottom follow>
            <S.ButtonBottomText>Seguir</S.ButtonBottomText>
          </S.ButtonBottom>
        </S.InfoContainer>
        )}
        data={posts}
        renderItem={({item}) => (
          <S.PostContainer>
          <S.LeftSide>
            <S.Touchable>
              <S.Avatar source={{uri: `https://lunion-mood.herokuapp.com/files/${user?.avatar}`}}></S.Avatar>
            </S.Touchable>
          </S.LeftSide>
          <S.RightSide>
            <S.PostHeader>
              <S.Touchable>
                <S.PostUser>{user?.name}</S.PostUser>
              </S.Touchable>
              <S.PostNick>@{user?.nick}</S.PostNick>
            </S.PostHeader>
            <S.PostData>
              {item.content}
            </S.PostData>
          </S.RightSide>
        </S.PostContainer>
        )}
      />
    </S.Container>
  )
}

export default User;
