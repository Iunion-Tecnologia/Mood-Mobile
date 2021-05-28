import React from 'react';
import timeAgo from '../../utils/time';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface INews {
  data: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: {
      id: string | null;
      name: string | null;
    };
  };
}

const News: React.FC<INews> = props => {
  const { navigate } = useNavigation();

  return (
    <S.Container
      onPress={() => navigate('WebViewScreen', { url: props.data.url })}
    >
      <S.Image
        resizeMethod="resize"
        source={{
          uri: props.data.urlToImage,
        }}
      />
      <S.Title>{props.data.title}</S.Title>
      <S.Description>{props.data.description}</S.Description>
      <S.Bottom>
        <S.Source>{props.data.source.name?.toLowerCase()}</S.Source>
        <S.Time> - {timeAgo(new Date(props.data.publishedAt))}</S.Time>
      </S.Bottom>
    </S.Container>
  );
};

export default News;
