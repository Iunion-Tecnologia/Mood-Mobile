import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import SvgUri from 'expo-svg-uri';
import * as S from './styles';

// Images
import newsImage from '../../assets/Intro/news.png';

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
    text: 'Description.\nSay something cool',
    image: newsImage,
    background_color: '#6C0FD9',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: '',
    background_color: '#22B8D5',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: '',
    background_color: '#6C0FD9',
  },
];

const Intro: React.FC = () => {
  return (
    <AppIntroSlider
      data={slides}
      keyExtractor={item => String(item.key)}
      onDone={() => console.log('')}
      renderItem={({ item }: { item: ISlide }) => (
        <S.Container color={item.background_color}></S.Container>
      )}
    />
  );
};

export default Intro;
