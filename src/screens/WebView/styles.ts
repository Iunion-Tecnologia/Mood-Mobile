import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  height: 60px;
  background-color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-family: Rubik_400Regular;
  font-size: 18px;
`;
