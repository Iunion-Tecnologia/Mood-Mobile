import styled from 'styled-components/native';
import { StatusBar, StyleSheet } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  height: 200px;
  background-color: #FFF;
  margin: 0 10px;
  font-size: 18px;
  padding: 0 8px;
  padding-top: 14px;

  margin-top: 10px;
  border-radius: 5px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  background-color: #6C0FD9;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  margin-left: 10px;
  margin-top: 10px;
`;



export const AvatarButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-left: 10px;
  width: 100px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #eee;
`;

export const AvatarPlaceholder = styled.View`
  background-color: #eee;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;
