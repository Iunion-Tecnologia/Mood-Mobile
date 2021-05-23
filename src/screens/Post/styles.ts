import styled from 'styled-components/native';
import { StatusBar, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
  flex: 1;
`;

export const Input = styled.TextInput`
  height: 200px;
  background-color: #fff;
  margin: 0 10px;
  font-size: 18px;
  padding: 0 8px;
  padding-top: 14px;

  margin-top: 10px;
  border-radius: 5px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 50px;
  background-color: #6c0fd9;
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

export const ImageButton = styled.TouchableOpacity`
  height: 390px;
  margin: 10px 10px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2px;

  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
