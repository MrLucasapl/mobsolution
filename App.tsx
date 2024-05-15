import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/stack/mainStack';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({ Inter_400Regular });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}