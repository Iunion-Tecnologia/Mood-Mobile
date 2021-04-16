import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

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

export const DataContainer = styled.View`
  margin-top: auto;
  height: 500px;
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

export const InputContainer = styled.View`
  height: 60px;
  margin-top: 20px;
  flex-direction: row;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  padding-left: 20px;
  font-size: 16px;
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
`;


