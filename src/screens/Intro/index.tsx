import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import SvgUri from 'expo-svg-uri';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

import background from '../../assets/background.svg';
// Images
import newsImage from '../../assets/Intro/news.png';
import chatImage from '../../assets/Intro/chat.png';
import gitImage from '../../assets/Intro/git.png';

interface ISlide {
  key: number;
  title: string;
  text: string;
  image: string;
  background_color: string;
}

const slides: ISlide[] = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Com o Mood, você fica por dentro das nóticias!',
    image: newsImage,
    background_color: '#6C0FD9',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Compartilhe suas ideias para seus seguidores',
    image: chatImage,
    background_color: '#22B8D5',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'O Mood é Open-Source, você pode contribuir também!',
    image: gitImage,
    background_color: '#6C0FD9',
  },
];

const Intro: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <AppIntroSlider
      nextLabel="Próximo"
      doneLabel="Feito"
      data={slides}
      keyExtractor={item => String(item.key)}
      onDone={() => navigate('Presentation')}
      renderItem={({ item }: { item: ISlide }) => (
        <S.Container color={item.background_color}>
          <SvgUri
            fillAll
            style={{ position: 'absolute', top: 0, opacity: 0.5 }}
            source={background}
          />

          <S.Image resizeMode="contain" source={item.image} />

          <S.Description>{item.text}</S.Description>
        </S.Container>
      )}
    />
  );
};

export default Intro;
