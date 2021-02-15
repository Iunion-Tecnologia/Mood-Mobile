import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #FFF;

  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  color: #6C0FD9;
  font-size: 20px;
  margin: 0 auto;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const Bottom = styled.TouchableOpacity`
  height: 60px;
  border-top-width: 1px;
  border-top-color: #ddd;
  z-index: 3;
  background-color: #fff;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BottomText = styled.Text`
  color: #6C0FD9;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
  margin-left: 8px;
`;

export const ForgotPass = styled.Text`
  color: #6C0FD9;
  text-decoration: underline;
  margin: 0 auto;
`;

export const ForgotButton = styled.TouchableOpacity``;

export const SubmitContainer = styled.TouchableOpacity`
  height: 50px;
  background-color: #6C0FD9;

  align-items: center;
  justify-content: center;
  margin: 30px;
  border-radius: 5px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const InputContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;

  border-width: 1px;
  border-color: #ddd;
  margin: 0 30px;
  margin-top: 5px;
  padding: 0 10px;
  border-radius: 5px;
`;

export const InputText = styled.TextInput`
  height: 50px;
  flex: 1;
  font-size: 14px;
  margin-left: 8px;
`;

export const PassButton = styled.TouchableOpacity`

`;