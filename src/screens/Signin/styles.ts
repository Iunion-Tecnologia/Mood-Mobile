import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar, Animated } from 'react-native';

interface IInputContainer {
  erros?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #6C0FD9;
`;

export const Logo = styled.Image`
  position: absolute;
  right: 30px;
  top: ${30 + Number(StatusBar.currentHeight)}px;
`;

export const DataContainer = styled(Animated.View)`
  margin-top: auto;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fff;

  padding: 0 30px;
  padding-top: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

export const InputContainer = styled.View<IInputContainer>`
  height: 60px;
  margin-top: 20px;
  flex-direction: row;
  border-width: 1px;
  border-color: ${({erros}) => erros ? '#CCC' : '#F00'};
  border-radius: 8px;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  padding-left: 20px;
  font-size: 16px;
  font-family: Rubik_400Regular;
`;

export const PasswordEye = styled.TouchableOpacity`
  padding-right: 10px;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #6C0FD9;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 30px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ForgotPassText = styled.Text`
  font-family: Rubik_400Regular;
  color: #999;
`;

export const ForgotPassButton = styled.TouchableOpacity`
  align-self: center;
  margin: 20px 0;
`;

export const RememberContainer = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;

export const RememberButton = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-width: 1px;
  border-color: #999;
  align-items: center;
  justify-content: center;
`;

export const RememberText = styled.Text`
  font-family: Rubik_400Regular;
  margin-left: 10px;
  color: #999;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  top: ${30 + Number(StatusBar.currentHeight)}px;
`;

export const Error = styled.Text`
  color: #f00;
  font-size: 10px;
`;
