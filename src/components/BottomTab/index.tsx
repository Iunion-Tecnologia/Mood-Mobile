import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import { Container, RouteContainer, Label } from './styles';

const Tab = ({ navigation }: BottomTabBarProps) => {
  return (
    <Container style={{
      shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }}>
      <RouteContainer onPress={() => navigation.navigate('Main')}>
        <SimpleLineIcons name="home" size={20} color="#515257" />
        <Label>Início</Label>
      </RouteContainer>

      <RouteContainer onPress={() => navigation.navigate('Order')}>
        <Ionicons name="clipboard-outline" size={20} color="#515257" />
        <Label>Pedidos</Label>
      </RouteContainer>

      <RouteContainer onPress={() => navigation.navigate('Profile')}>
        <SimpleLineIcons name="user" size={20} color="#515257" />
        <Label>Perfil</Label>
      </RouteContainer>
    </Container>
  );
}

export default Tab;
