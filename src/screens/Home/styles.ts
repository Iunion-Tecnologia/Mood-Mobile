import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Number(StatusBar.currentHeight)}px;
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
  color: #6c0fd9;
`;

export const Data = styled.Text``;

export const Image = styled.Image.attrs({})`
  margin-top: 10px;
  width: 100%;
  height: 320px;
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

export const Warning = styled.Text``;
