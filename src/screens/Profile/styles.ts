import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #FFF;
`;

export const InfoContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding: 0 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ProfileImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 5px;
`;

export const ProfileName = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-top: 10px;
`;

export const ProfileNick = styled.Text`
  color: #6C0FD9;
  font-size: 16px;
`;

export const ProfileDescription = styled.Text`
  margin: 5px 0;
`;

export const DataContainer = styled.View`
  flex-direction: row;
  margin: 5px 0;
  flex: 1;
  padding-left: 2px;
`;

export const Data = styled.View`
  height: 70px;
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const DataName = styled.Text`
  font-size: 16px;
  color: #6C0FD9;
`;

export const DataNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TopInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
