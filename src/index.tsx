/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, DetailScreen} from './screens';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const App = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: t('home')}}
          component={MainScreen}
        />
        <Stack.Screen
          name="Details"
          options={{title: t('details')}}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
