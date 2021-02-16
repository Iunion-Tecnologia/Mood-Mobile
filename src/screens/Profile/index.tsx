import React from 'react';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import * as S from './styles';


const Profile: React.FC = () => {

  const auth = useSelector((state: ApplicationState) => state.auth);

  return (
    <S.Container>
      <Header />
      <S.InfoContainer>
        <S.TopInfo>
          <S.ProfileImage source={{uri: `https://lunion-mood.herokuapp.com/files/${auth.user?.avatar}`}} />
          <S.DataContainer>
            <S.Data>
              <S.DataNumber>{auth.user?.post_count}</S.DataNumber>
              <S.DataName>Posts</S.DataName>
            </S.Data>
            <S.Data>
              <S.DataNumber>{auth.user?.followers_count}</S.DataNumber>
              <S.DataName>Seguidores</S.DataName>
            </S.Data>
            <S.Data>
              <S.DataNumber>{auth.user?.following_count}</S.DataNumber>
              <S.DataName>Seguindo</S.DataName>
            </S.Data>
          </S.DataContainer>
        </S.TopInfo>
        
        <S.ProfileName>{auth.user?.name}</S.ProfileName>
        <S.ProfileNick>@{auth.user?.nick}</S.ProfileNick>

        <S.ProfileDescription>{auth.user?.bio}</S.ProfileDescription>
        <S.ButtonBottom>
          <S.ButtonBottomText>Editar Perfil</S.ButtonBottomText>
        </S.ButtonBottom>
      </S.InfoContainer>
    </S.Container>
  )
}

export default Profile;
