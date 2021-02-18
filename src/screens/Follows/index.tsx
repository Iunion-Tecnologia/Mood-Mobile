import React, {useState, useEffect, useCallback} from 'react';
import { FlatList, Alert, RefreshControl, ActivityIndicator } from 'react-native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import api from '../../services/api';

interface IResult {
  id: string;
  name: string;
  nick: string;
  avatar: string;
}

const DATA = [
  {
    id: '12345',
    name: 'Jonatha Rihan da Silva',
    nick: 'RBioZ',
    avatar: 'https://avatars.githubusercontent.com/u/35699301?v=4'
  },
]

const Follows: React.FC = () => {
  const [results, setResults] = useState<IResult[]>([]);
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const [page,setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [shuldLoad, setShuldLoad] = useState(true);
  const route = useRoute<
    RouteProp<{ params: { id: string, type: string } }, 'params'>
  >();

  const handleRefresh = async() => {
    setRefresh(true);
    setIsLoading(true);
    try {
      console.log(page);
      const response = await api.get(`user/${route.params.type}/${route.params.id}?page=${0}&limit=15`);
      setShuldLoad(true)
      setResults(response.data)
      setPage(1);
    }
    catch(error) {
      Alert.alert('Error', error.response.message);
    }
    setIsLoading(false);
    setRefresh(false);
  }

  const handleLoadUsers = useCallback(async() => {
    setIsLoading(true);
    try {
      console.log(page);
      const response = await api.get(`user/${route.params.type}/${route.params.id}?page=${page}&limit=15`);
      !response.data.length && setShuldLoad(false)
      setResults([...results,...response.data])
      setPage(e => e+=1);
    }
    catch(error) {
      Alert.alert('Error', error.response.message);
    }
    setIsLoading(false);
  }, [route, page])

  useEffect(() => {
    handleLoadUsers();
  }, [])

  return(
    <S.Container>
      <S.Header>
        <S.BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={28} color="#6C0FD9" />
        </S.BackButton>
        <S.HeaderTitle>
          {
            route.params.type === 'getfollowers'
            ?
            'Seguidores'
            :
            'Seguindo'
          }
          </S.HeaderTitle>
      </S.Header>
      <FlatList
        data={results}
        onEndReached={() => {
          shuldLoad && handleLoadUsers();
        }}
        onEndReachedThreshold={0.01}
        refreshControl={
          <RefreshControl
            colors={['#6C0FD9']}
            tintColor="#6C0FD9"
            refreshing={refresh}
            onRefresh={handleRefresh}
          />
        }
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => {
          if (!isLoading) return null;
          return (
            <ActivityIndicator
              animating={isLoading}
              style={{ height: 50 }}
              size="large"
              color="#6C0FD9"
            />
          );
        }}
        renderItem={({item}) => (
          <S.Item>
            <S.ItemLeft>
              <S.ItemAvatar source={{uri: `https://lunion-mood.herokuapp.com/files/${item.avatar}`}} />
            </S.ItemLeft>
            <S.ItemRight>
            <S.ItemNick>{item.nick}</S.ItemNick> 
            <S.ItemName>{item.name}</S.ItemName>
            </S.ItemRight>
          </S.Item>
        )
      }
      />
    </S.Container>
  );  
}

export default Follows;
