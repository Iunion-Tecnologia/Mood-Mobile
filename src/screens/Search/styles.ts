import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Number(StatusBar.currentHeight)}px;
`;

export const SearchBar = styled.View`
  height: 50px;
  margin-top: 10px;

  flex-direction: row;
  padding: 0 10px;
`;

export const SearchInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
`

export const Button = styled.TouchableOpacity`
  width: 50px;
  background-color: #fff;
  border-radius: 25px;
  margin-left: 5px;

  align-items: center;
  justify-content: center;
`;
