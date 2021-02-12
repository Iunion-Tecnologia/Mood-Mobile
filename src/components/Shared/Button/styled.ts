import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background-color: #6C0FD9;

  align-items: center;
  justify-content: center;
  margin: 30px;
  border-radius: 5px;
`;

export const Text = styled.TextInput`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
