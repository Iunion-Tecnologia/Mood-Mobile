import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #eee;

  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-size: 24px;
  color: #6C0FD9;
  font-weight: 100;
`;
