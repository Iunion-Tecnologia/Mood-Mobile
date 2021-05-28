import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import Header from '../../components/Header';
import api from '../../services/api';
import * as S from './styles';
import New from '../../components/News';
import axios from 'axios';
import { Currency } from './types';

const News: React.FC = () => {
  const [news, setNews] = useState([]);
  const [currency, setCurrency] = useState<Object>();
  const [refresh, setRefresh] = useState(false);

  const handleLoadCurrency = async () => {
    try {
      const response = await axios.get(
        'https://economia.awesomeapi.com.br/all',
      );
      setCurrency(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    handleLoadCurrency();
  }, []);

  return (
    <S.Container>
      <Header />
      <FlatList
        ListHeaderComponent={() => (
          <S.CoinsContainer horizontal showsHorizontalScrollIndicator={false}>
            {currency &&
              Object.values(currency).map((item: Currency, index) => (
                <S.Coin key={String(index)}>
                  <S.CoinKey>
                    {item.code}/{item.codein}
                  </S.CoinKey>
                  <S.CoinValue>
                    {Intl.NumberFormat('pt-BR', {
                      minimumFractionDigits: 2,
                      style: 'currency',
                      currency: 'BRL',
                    })
                      .format(Number(item.ask))
                      .replace(/^(\D+)/, '$1 ')}
                  </S.CoinValue>
                </S.Coin>
              ))}
          </S.CoinsContainer>
        )}
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
