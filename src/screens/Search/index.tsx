import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Header'
import {FlatList, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons'
import {useForm} from 'react-hook-form';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

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

const Search: React.FC = () => {

  const {register, handleSubmit, setValue} = useForm();
  const [results, setResults] = useState<IResult[]>([]);
  const navigation = useNavigation();

  const handleSubmitQuery = useCallback(async(data) => {
    try {
      const response = await api.get(`/user/search?query=${data.query}`);
      setResults(response.data);
    }
    catch(error){
      Alert.alert('Error', error.response.message);
    }
  }, [])

  useEffect(() => {
    register("query")
  }, [register]);

  return(
    <S.Container>
      <Header />
      <S.SearchBar>
        <S.SearchInput onChangeText={text => {setValue('query', text)}} placeholder="Pesquisar" />
        <S.Button onPress={handleSubmit(handleSubmitQuery)}>
          <Feather name="search" color="#6C0FD9" size={30} />
        </S.Button>
      </S.SearchBar>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <S.Item onPress={() => navigation.navigate('UserScreen', {id: item.id})}>
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
  )
}

export default Search;
