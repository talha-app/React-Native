import React from 'react';
import MainNavigation from './navigation/Main'
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
      <NavigationContainer>
      <MainNavigation/>
      </NavigationContainer>
  );
}
