import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import AlertScreen from '../screens/AlertScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SlideScreen from '../screens/SlideScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextInputScreen from '../screens/TextInputScreen';


// const customTheme: Theme ={
//   dark: true,
//   colors: {
//     ...DarkTheme.colors
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext( ThemeContext );
  return (
    <NavigationContainer
        theme={ theme }
    >
      <Stack.Navigator
          screenOptions={{
              headerShown: false,
              cardStyle: {
                // backgroundColor: 'white'
              }
          }}
      >
        <Stack.Screen name="HomeScreen" component={ HomeScreen } />
        <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
        <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
        <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
        <Stack.Screen name="AlertScreen" component={ AlertScreen } />
        <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
        <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
        <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
        <Stack.Screen name="ModalScreen" component={ ModalScreen } />
        <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
        <Stack.Screen name="SlideScreen" component={ SlideScreen } />
        <Stack.Screen name="ChangeThemeScreen" component={ ChangeThemeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}