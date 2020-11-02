import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Navigation = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigation.Navigator
      initalRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Navigation.Screen name="Main" component={Main} />
      <Navigation.Screen name="NewEntry" component={NewEntry} />
      <Navigation.Screen name="Report" component={Report} />
    </Navigation.Navigator>
  </NavigationContainer>
);

export default Routes;
