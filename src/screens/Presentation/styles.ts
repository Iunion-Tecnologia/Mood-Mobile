import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  padding-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #6C0FD9;
`;

export const Title = styled.Text`
  font-size: 38px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SiginButton = styled(RectButton)`
  background-color: #fff;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 50px;
`;

export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  border-color: #fff;
  border-width: 1px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 15px;
`;

export const SignInText = styled.Text`
  font-weight: bold;
`;

export const SignUpText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
