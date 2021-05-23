import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
  flex: 1;
`;
