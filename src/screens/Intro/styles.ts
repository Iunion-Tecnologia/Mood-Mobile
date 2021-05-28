import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

interface IContainer {
  color: string;
}

export const Container = styled.View<IContainer>`
  background-color: ${props => props.color};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 250px;
  width: 250px;
`;

export const Description = styled.Text`
  color: #fff;
  text-align: center;
  margin: 0 20px;
  margin-top: 50px;
  font-family: Rubik_400Regular;
  font-size: 18px;
`;
