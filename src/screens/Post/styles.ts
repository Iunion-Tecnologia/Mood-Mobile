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

