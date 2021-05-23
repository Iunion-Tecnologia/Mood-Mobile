import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #fff;
  min-height: 350px;
  margin: 0 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  elevation: 5;
`;

export const Image = styled.Image`
  height: 200px;
  background-color: #ddd;
`;

export const Title = styled.Text`
  font-family: Rubik_500Medium;
  font-size: 16px;
  margin: 10px 0;
`;

export const Description = styled.Text`
  font-family: Rubik_400Regular;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const Source = styled.Text`
  font-family: Rubik_400Regular;
  color: #999;
`;

export const Time = styled.Text`
  font-family: Rubik_400Regular;
  color: #999;
`;
