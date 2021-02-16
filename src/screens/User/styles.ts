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
  background-color: #eee;
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

interface IButtonBottom {
  follow: boolean;
}

export const ButtonBottom = styled.TouchableOpacity<IButtonBottom>`
  height: 40px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #6C0FD9;
`;

export const ButtonBottomText = styled.Text`
  font-weight: bold;
  color: #FFF;
`;


export const PostContainer = styled.View`
  min-height: 62px;
  padding: 0 10px;
  border-bottom-width: 1px;
  border-color: #eee;
  background-color: #fff;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const PostHeader = styled.View`
  height: 25px;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const PostUser = styled.Text.attrs({
  numberOfLine: 1,
})`
  font-weight: bold;
  font-size: 16px;
`;

export const PostNick = styled.Text`
  margin-left: 5px;
  font-size: 12px;
  color: #6C0FD9;
`;

export const PostData = styled.Text`

`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: #eee;
`;

export const LeftSide = styled.View`
  width: 60px;
`;

export const RightSide = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Touchable = styled.TouchableOpacity``;