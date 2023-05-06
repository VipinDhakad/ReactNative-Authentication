import React, { useContext } from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AuthContext } from '../context/AuthenticationProvider';

export default function Home() {

  const {user, logout} = useContext(AuthContext);
  
  return (
    <View style={styles.mainContainer}>
      <Text>Welcome User</Text>
      <TouchableOpacity
            style={styles.button}
            onPress={() => logout()}>
            <Text style={styles.btnTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  button: {
    backgroundColor: '#247a4d',
    padding: '5%',
    width: '35%',
    borderRadius: 10,
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
  },
})
