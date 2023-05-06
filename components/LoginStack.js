import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import ForgotPass from './ForgotPass';
import SignUp from './SignUp';
const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#ced4da', // Change the color here
      },}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Set you password" component={ForgotPass} />
      <Stack.Screen name="Connect with us" component={SignUp} />
    </Stack.Navigator>
  );
}

export default LoginStack;
