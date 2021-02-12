import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #FFF;
`;

export const PostButton = styled(RectButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;

  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #6C0FD9;

  align-items: center;
  justify-content: center;
`;