import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const ForgotPass= ()=> {
  return (
      <View style={styles.mainContainer}>
      <View style={styles.upperContainer}></View>
      <View style={styles.lowerContainer}>
        <TextInput style={styles.input} placeholder='Username' autoCapitalize='none'/>  
        {/* //text entry for the username */}
        <TextInput style={styles.input} placeholder='Mobile Number'  keyboardType='number-pad'/>   
        {/* //text entry for the mobile number */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>Send OTP</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:'center',
    backgroundColor:"#7E06AD",
  },
  upperContainer:{
    flex:2,
    backgroundColor:"#7E06AD",
  },
  lowerContainer:{
    flex:5,
    backgroundColor:'#FFFFFF',
    width:'100%',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    alignItems:'center',
    marginTop:'40%',
    padding:'3%'
    
    },
  input:{
    borderBottomWidth:1,
    width:'80%'
  },
  text:{
    textAlign:'right',
    color:'blue',
    width:'80%'
  },
  buttonContainer:{
    width:'80%',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:'5%'
  },
  button:{
    backgroundColor:"#7E06AD",
    padding:'5%',
    width:'45%',
    borderRadius:10
  },
  btnTxt:{
    textAlign:'center',
    color:"white"
  }
  
});

export default ForgotPass;
