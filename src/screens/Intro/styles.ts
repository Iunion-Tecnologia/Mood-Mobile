import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

interface IContainer {
  color: string;
}

export const Container = styled.View<IContainer>`
  background-color: ${props => props.color};
  flex: 1;
`;

export const Image = styled.Image``;
