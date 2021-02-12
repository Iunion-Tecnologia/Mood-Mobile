import React from 'react';

import * as S from './styles';
import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button';
import Mood from '../../assets/mood.png';

const Login: React.FC = () => {
  return (
    <>
    <S.Container>
      <S.Logo resizeMode="contain" source={Mood} />
      <Input />
      <Input />
      <Button />
    </S.Container>
    <S.Bottom>
      <S.BottomText>Criar uma conta</S.BottomText>
    </S.Bottom>
    </>
  )
}

export default Login;
