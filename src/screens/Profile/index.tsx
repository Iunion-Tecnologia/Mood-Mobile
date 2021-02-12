import React from 'react';
import Header from '../../components/Header';
import * as S from './styles';

const Profile: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.InfoContainer>
        <S.TopInfo>
          <S.ProfileImage source={{uri: 'https://avatars.githubusercontent.com/u/35699301?v=4'}} />
          <S.DataContainer>
            <S.Data>
              <S.DataNumber>200</S.DataNumber>
              <S.DataName>Posts</S.DataName>
            </S.Data>
            <S.Data>
              <S.DataNumber>200</S.DataNumber>
              <S.DataName>Seguidores</S.DataName>
            </S.Data>
            <S.Data>
              <S.DataNumber>200</S.DataNumber>
              <S.DataName>Seguindo</S.DataName>
            </S.Data>
          </S.DataContainer>
        </S.TopInfo>
        
        <S.ProfileName>Jonatha Rihan da Silva</S.ProfileName>
        <S.ProfileNick>@RBioZ</S.ProfileNick>

        <S.ProfileDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud.</S.ProfileDescription>
      </S.InfoContainer>
    </S.Container>
  )
}

export default Profile;
