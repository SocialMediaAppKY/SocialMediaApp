import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import {LoginPage, SignupPage, ListPage, SplashScreen} from './pages';

const Stack = createStackNavigator(); // önemli

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={LoginPage} />

        <Stack.Screen name="Sign" component={SignupPage} />

        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={{headerShown: false, gestureEnabled: false}}
        />

        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
