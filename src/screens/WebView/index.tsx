import React from 'react';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const WebViewScreen: React.FC = () => {
  const route = useRoute<RouteProp<{ params: { url: string } }, 'params'>>();
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={() => goBack()}>
          <Ionicons name="ios-arrow-back" size={28} color="#6C0FD9" />
        </S.BackButton>
        <S.HeaderTitle>Notícias</S.HeaderTitle>
      </S.Header>
      <WebView
        originWhitelist={['*']}
        source={{ uri: route.params?.url ?? 'https://www.google.com' }}
      />
    </S.Container>
  );
};

export default WebViewScreen;
