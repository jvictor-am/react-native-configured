// import { createAppContainer } from '@react-navigation';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#00FF7F' },
          headerTintColor: '#000',
          headerBackTitleVisible: false,
        }}
      >
        <AppStack.Screen name="Teste01" component={Main} />
        <AppStack.Screen name="Teste02" component={User} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
