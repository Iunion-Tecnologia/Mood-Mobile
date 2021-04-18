import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 62px;
  padding: 20px 0px;
  border-bottom-width: 1px;
  border-color: #eee;
  background-color: #fff;
  padding-bottom: 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 40px;
  background-color: #EEE;
`;

export const HeaderData = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Name = styled.Text`
  font-family: Rubik_500Medium;
  font-size: 16px;
`;

export const Date = styled.Text`
  font-family: Rubik_400Regular;
  color: #ccc;
`;

export const ContentContainer = styled.View`
`;

export const Content = styled.Text`
  font-family: Rubik_400Regular;
  font-size: 20px;
  margin: 0 10px;
  margin-top: 10px;
`;

export const Image = styled.Image`
  margin-top: 10px;
  width: 100%;
  height: 412px;
  background-color: #EEE;
`;

export const Bottom = styled.View`
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 10px;
  background-color: #fff;
`;

export const Comments = styled.Text`
  color: #6C0FD9;
  font-family: Rubik_300Light;
  margin-left: 10px;
  margin-right: 0px;
  font-size: 18px;
`;
