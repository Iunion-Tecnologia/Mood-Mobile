import styled from 'styled-components/native';
import { StatusBar, StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
  background-color: #fff;
`;

export const SearchBar = styled.View`
  height: 50px;
  margin-top: 10px;

  flex-direction: row;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const SearchInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`

export const Button = styled.TouchableOpacity`
  width: 50px;
  background-color: #fff;
  border-radius: 25px;
  margin-left: 5px;

  align-items: center;
  justify-content: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;

export const Item = styled.TouchableOpacity`
  height: 50px;
  margin: 0 10px 5px 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ItemLeft = styled.View``;

export const ItemRight = styled.View`
  padding-left: 5px;
`;

export const ItemAvatar = styled.Image`
  height: 50px;
  width: 50px;
`;

export const ItemNick = styled.Text`
  color: #6C0FD9;
  font-weight: bold;
  font-size: 16px;
`;

export const ItemName = styled.Text``;