import React, { useContext } from 'react';

import LoginStack from './LoginStack';
import AccountStack from './AccountStack';
import {useState, useEffect} from 'react';
import { AuthContext } from '../context/AuthenticationProvider';
import auth from '@react-native-firebase/auth';

function StackScreen() {

  const {user, setUser} = useContext(AuthContext);
  const {loading, setIsLoading} = useState(true);

  const onAuthStateChanged=(user)=>{
    setUser(user);
    if(loading) setIsLoading(false);
  }
  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  },[]);

  if(loading) return null;

  return user ? <AccountStack /> : <LoginStack />;

}

export default StackScreen;
