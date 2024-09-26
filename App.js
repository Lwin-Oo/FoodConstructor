import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './assets/pages/homepage/homepage';
import FlavorPage from './assets/pages/parameterpages/flavorPage';
import AromaPage from './assets/pages/parameterpages/aromaPage';
import TexturePage from './assets/pages/parameterpages/texturePage';
import TemperaturePage from './assets/pages/parameterpages/temperaturePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage}/>
        <Stack.Screen name="FlavorPage" component={FlavorPage}/>
        <Stack.Screen name="AromaPage" component={AromaPage}/>
        <Stack.Screen name="TexturePage" component={TexturePage}/>
        <Stack.Screen name="TemperaturePage" component={TemperaturePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
