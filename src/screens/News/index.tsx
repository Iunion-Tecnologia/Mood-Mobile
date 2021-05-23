import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Header from '../../components/Header';
import api from '../../services/api';
import * as S from './styles';
import New from '../../components/News';

const News: React.FC = () => {
  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleLoadNews = useCallback(async () => {
    setRefresh(true);
    try {
      const response = await api.get(
        'https://newsapi.org/v2/top-headlines?country=br&sortBy=publishedAt&apiKey=3c5ab7331bf24f1ebcdb9e06cf7e431e',
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
    setRefresh(false);
  }, []);

  useEffect(() => {
    handleLoadNews();
  }, []);

  return (
    <S.Container>
      <Header />
      <FlatList
        refreshControl={
          <RefreshControl
            colors={['#6C0FD9']}
            tintColor="#6C0FD9"
            refreshing={refresh}
            onRefresh={handleLoadNews}
          />
        }
        keyExtractor={(_, index) => String(index)}
        data={news}
        renderItem={({ item }) => <New data={item} />}
      />
    </S.Container>
  );
};

export default News;
