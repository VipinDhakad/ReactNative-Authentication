import React from 'react';
import StackScreen from './components/StackScreen';
import {NavigationContainer} from '@react-navigation/native';

import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import { AuthProvider } from './context/AuthenticationProvider';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AuthProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </AuthProvider>
    
  )
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7E06AD',
  },
});

export default App;
