// screens/HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenue sur la page d'accueil !</Text>
    </View>
    
  );
};

export default HomeScreen;
