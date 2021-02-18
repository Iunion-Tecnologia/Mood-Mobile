import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #FFF;
`;

export const Item = styled.View`
  height: 50px;
  margin: 0 10px 5px 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ItemLeft = styled.View``;

export const ItemRight = styled.View`
  padding-left: 5px;
`;

export const ItemAvatar = styled.Image`
  height: 50px;
  width: 50px;
  background-color: #eee;
`;

export const ItemNick = styled.Text`
  color: #6C0FD9;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemName = styled.Text``;

export const Header = styled.View`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;

  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #6C0FD9;
  font-weight: bold;
  font-size: 18px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;