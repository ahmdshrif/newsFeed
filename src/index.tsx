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
import {useColorScheme} from 'react-native';
import {NavigationContainer, getStateFromPath} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, DetailScreen, SettingsScreen} from './screens';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const MainStackNavigation = () => {
  const {t} = useTranslation();

  return (
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
  );
};

const App = () => {
  const {t} = useTranslation();
  const scheme = useColorScheme();
  const linking = {
    prefixes: ['newsFeed://'],
    config: {
      initialRouteName: 'Settings',
      screens: {
        News: {
          path: 'news',
          screens: {
            Home: {
              path: 'home',
            },
            Details: {
              path: 'details/:title/:content/:urlToImage',
            },
          },
        },
        Settings: {
          path: 'settings',
        },
      },
    },
    getStateFromPath: (path: any, options: any) => {
      const state = getStateFromPath(path, options);
      console.log(state);

      const newState = {
        ...state,
        routes: state?.routes.map(route => {
          if (route.name === 'details') {
            console.log('details route');
            // modify your params however you like here!
            return {
              ...route,
              params: {data: route.params},
            };
          } else {
            return route;
          }
        }),
      };
      return newState;
    },
  };
  return (
    <NavigationContainer
      linking={linking}
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            title: t('news'),
            tabBarIcon: () => null,
          }}
          name="News"
          component={MainStackNavigation}
        />
        <Tab.Screen
          name="Settings"
          options={{
            title: t('settings'),
            tabBarIcon: () => null,
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
