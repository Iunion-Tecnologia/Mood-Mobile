import React, {useEffect, useCallback, useState} from 'react';
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

const User: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const [status, setStatus] = useState<boolean>(false)
  const route = useRoute<
  RouteProp<{ params: { id: string } }, 'params'>
>();

  const handleLoadProfile = useCallback(async() => {
    try {
      const response = await api.get(`/user/profile/${route.params.id}`);
      setUser(response.data.user);
    }
    catch(error){ 
      console.log(error);
    }

  }, [route])

  useEffect(() => {
    handleLoadProfile();
  }, [])

  return (
    <S.Container>
      <Header />
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
        <S.ButtonBottom>
          <S.ButtonBottomText>Seguir</S.ButtonBottomText>
        </S.ButtonBottom>
      </S.InfoContainer>
    </S.Container>
  )
}

export default User;
