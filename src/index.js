import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00FF7F" />
      <Routes />
    </>

    // <NavigationContainer>
    //   <Text>Hello you!</Text>
    // </NavigationContainer>
  );
}
