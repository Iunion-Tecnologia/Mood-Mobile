import React, { useEffect, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import api from '../../services/api';
import * as S from './styles';
import New from '../../components/News';

const News: React.FC = () => {
  const [news, setNews] = useState([]);

  const handleLoadNews = useCallback(async () => {
    try {
      const response = await api.get(
        'https://newsapi.org/v2/top-headlines?country=br&apiKey=3c5ab7331bf24f1ebcdb9e06cf7e431e',
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleLoadNews();
  }, []);

  return (
    <S.Container>
      <Header />
      <FlatList data={news} renderItem={({ item }) => <New data={item} />} />
    </S.Container>
  );
};

export default News;
