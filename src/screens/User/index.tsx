import React, { useEffect, useCallback, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Post from '../../components/Post';
import api from '../../services/api';
import { useComment } from '../../hooks/comment';
import * as S from './styles';

interface IUser {
  id: string;
  name: string;
  nick: string;
  avatar_url: string | null;
  bio: string | null;
  followers_count: number;
  following_count: number;
  post_count: number;
}

interface IPost {
  id: string;
  content: string;
  image_url: string;
  comment_count: number;
  created_at: string;
}

const User: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<IUser>();
  const [status, setStatus] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [shuldLoad, setShuldLoad] = useState(true);
  const route = useRoute<RouteProp<{ params: { id: string } }, 'params'>>();
  const { openModal } = useComment();

  const handleRefresh = () => {
    setRefresh(true);
    handleLoadProfile();
    setRefresh(false);
  };

  const handleFollows = useCallback(async () => {
    if (status === true) {
      try {
        await api.post(`/user/unfollow/${route.params.id}`);
      } catch (error) {
        Alert.alert('Error', error.response.message);
      }
    } else {
      try {
        await api.post(`/user/follow/${route.params.id}`);
      } catch (error) {
        Alert.alert('Error', error.response.message);
      }
    }
    setStatus(e => !e);
  }, [status]);

  const handleLoadProfile = useCallback(async () => {
    try {
      const response = await api.get(`/user/profile/${route.params.id}`);
      setUser(response.data.user);
      setStatus(response.data.is_following);
    } catch (error) {
      Alert.alert('Error', error.response.message);
    }
  }, [route]);

  const handleLoadPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `/post/user/${route.params.id}?page=${page}`,
      );
      !response.data.length && setShuldLoad(false);
      setPosts([...posts, ...response.data]);
      setPage(e => (e += 1));
    } catch (error) {
      Alert.alert('Error', error.response.message);
    }
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    handleLoadProfile();
    handleLoadPosts();
  }, []);

  return (
    <S.Container>
      <Header />
      <FlatList
        onEndReached={() => {
          shuldLoad && handleLoadPosts();
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
        ListHeaderComponent={() => (
          <S.InfoContainer>
            <S.TopInfo>
              <S.ProfileImage source={{ uri: `${user?.avatar_url}` }} />
              <S.DataContainer>
                <S.Data>
                  <S.DataNumber>{user?.post_count}</S.DataNumber>
                  <S.DataName>Posts</S.DataName>
                </S.Data>
                <S.DataButton
                  onPress={() =>
                    navigation.navigate('FollowScreen', {
                      id: user?.id,
                      type: 'getfollowers',
                    })
                  }
                >
                  <S.DataNumber>{user?.followers_count}</S.DataNumber>
                  <S.DataName>Seguidores</S.DataName>
                </S.DataButton>
                <S.DataButton
                  onPress={() =>
                    navigation.navigate('FollowScreen', {
                      id: user?.id,
                      type: 'getfollowing',
                    })
                  }
                >
                  <S.DataNumber>{user?.following_count}</S.DataNumber>
                  <S.DataName>Seguindo</S.DataName>
                </S.DataButton>
              </S.DataContainer>
            </S.TopInfo>

            <S.ProfileName>{user?.name}</S.ProfileName>
            <S.ProfileNick>@{user?.nick}</S.ProfileNick>

            <S.ProfileDescription>{user?.bio}</S.ProfileDescription>
            <S.ButtonBottom onPress={handleFollows} follow={status}>
              <S.ButtonBottomText follow={status}>
                {status ? 'Parar de seguir' : 'Seguir'}
              </S.ButtonBottomText>
            </S.ButtonBottom>
          </S.InfoContainer>
        )}
        data={posts}
        renderItem={({ item }) => (
          <Post
            data={{
              p_content: item.content,
              p_comment_count: item.comment_count,
              p_created_at: item.created_at,
              p_id: item.id,
              p_image_url: item.image_url,
              u_avatar_url: String(user?.avatar_url),
              u_id: String(user?.id),
              u_name: String(user?.name),
              u_nick: String(user?.nick),
            }}
            navigate={navigation.navigate}
            comment={() => openModal(item.id)}
          />
        )}
      />
    </S.Container>
  );
};

export default User;
