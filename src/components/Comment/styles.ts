import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text``;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding: 5px 10px;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

export const InputContainer = styled.View`
  background-color: #f0f0f5;
  flex: 1;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: Rubik_500Medium;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const CommentContainer = styled.View`
  min-height: 100px;
  background-color: #f0f;
  margin-bottom: 5px;
`;

export const CommentHeader = styled.View``;

export const CommentAvatar = styled.Image``;

export const CommentHeaderContainer = styled.Text``;

export const CommentNick = styled.Text``;

export const CommentHour = styled.Text``;
