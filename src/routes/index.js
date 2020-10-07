import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import NewEntry from '../pages/NewEntry';
import Report from '../pages/Report';

const Navigation = createStackNavigator();

const Routes = () => (
  <Navigation.Navigator
    initalRouteName="Main"
    screenOptions={{
      headerShown: false,
    }}>
    <Navigation.Screen name="Main" component={Main} />
    <Navigation.Screen name="NewEntry" component={NewEntry} />
    <Navigation.Screen name="Report" component={Report} />
  </Navigation.Navigator>
);

export default Routes;
