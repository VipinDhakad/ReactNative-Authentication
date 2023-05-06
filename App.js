import React from 'react';
import StackScreen from './Screens/StackScreen';
import {NavigationContainer} from '@react-navigation/native';

import {
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import { AuthProvider } from './context/AuthenticationProvider';

const Stack = createStackNavigator();

const App = () => {

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
