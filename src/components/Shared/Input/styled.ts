import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;

  border-width: 1px;
  border-color: #ddd;
  margin: 0 30px;
  margin-top: 5px;
  padding-left: 10px;
  border-radius: 5px;
`;

export const TextInput = styled.TextInput`
  height: 50px;
  flex: 1;
  font-size: 14px;
  margin-left: 8px;
`;
