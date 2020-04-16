import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#00FF7F' },
        headerTintColor: '#000',
        headerBackTitleVisible: false,
      }}
    >
      <AppStack.Screen
        name="Tela01"
        component={Main}
        options={{ title: 'Tela01' }}
      />
      <AppStack.Screen
        name="Tela02"
        component={User}
        options={{ title: 'Tela02' }}
      />
    </AppStack.Navigator>
  );
}
