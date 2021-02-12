import React from 'react';

import * as S from './styles';
import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';
import Mood from '../../assets/mood.png';

const SignUp: React.FC = () => {
  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />
        <Input iconName="user" placeholder="Nome"/>
        <Input iconName="mail" placeholder="E-mail" />
        <Input iconName="paperclip" placeholder="Nick" />
        <Input iconName="lock" placeholder="Senha" />
      <Button />
    </S.Container>
    <S.Bottom>
      <S.BottomText>Cadastrar</S.BottomText>
    </S.Bottom>
    </>
  )
}

export default SignUp;
