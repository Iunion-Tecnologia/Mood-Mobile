import styled from 'styled-components/native';
import { StatusBar, StyleSheet } from 'react-native';

export const Container = styled.View`
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
  flex: 1;
`;

export const CoinsContainer = styled.ScrollView`
  height: 60px;
  margin: 20px 0;
  padding-left: 20px;
`;

export const Coin = styled.View`
  height: 60px;
  width: 140px;
  margin-right: 10px;
  justify-content: space-around;
  padding: 0 5px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
  border-radius: 3px;
`;

export const CoinKey = styled.Text`
  font-family: Rubik_400Regular;
  color: #555;
`;

export const CoinValue = styled.Text`
  font-family: Rubik_500Medium;
  font-size: 16px;
  color: #6c0fd9;
`;
