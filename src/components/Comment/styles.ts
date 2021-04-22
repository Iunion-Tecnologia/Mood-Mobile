import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 10px;
  padding-bottom: 50px;
`;

export const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Header = styled.View`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  justify-content: center;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-family: Rubik_500Medium;
  font-size: 18px;
  color: #333;
`;

export const BottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding: 5px 10px;
  border-top-width: 1px;
  border-top-color: #ccc;
  background-color: #fff;
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
  font-family: Rubik_300Light;
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
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding-bottom: 10px;
`;

export const CommentHeader = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin: 10px 0;
`;

export const CommentAvatar = styled.Image`
  height: 60px;
  width: 60px;
  background-color: #eee;
`;

export const CommentHeaderContainer = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const CommentNick = styled.Text`
  font-family: Rubik_500Medium;
  font-size: 16px;
`;

export const CommentTime = styled.Text`
  font-family: Rubik_300Light;
`;

export const CommentContent = styled.Text`
  margin: 0 20px;
  font-family: Rubik_400Regular;
`;
