import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #eee;
`;

export const Input = styled.TextInput`
  height: 200px;
  background-color: #FFF;
  margin: 0 10px;
  font-size: 18px;
  padding: 0 5px;
  padding-top: 3px;

  margin-top: 10px;
  border-radius: 5px;
`;

export const Button = styled(RectButton)`
  height: 50px;
  background-color: #6C0FD9;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
  border-radius: 5px;

  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Header = styled.View`
  height: 50px;
  background-color: #6C0FD9;

  justify-content: center;

  elevation: 1;

  align-items: center;
  justify-content: center;

`;

export const BackHeader = styled.TouchableOpacity`
  margin-left: 5px;
  position: absolute;
  left: 10;
  top: 10;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;


