import React, {useContext, useState} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

import {AuthContext} from '../context/AuthenticationProvider';

const Login = ({navigation}) => {
  // const {isLoggedIn, setIsLoggedIn} = useLogin();
  const {login} = useContext(AuthContext);      //getting login func from context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn=(emailID, pass)=>{
    setLoading(true);
    if(emailID!= "" && pass !="") login(emailID, pass);    //check for the empty values.
    setTimeout(() => {
      setLoading(false);            //for the loading state of the button
    }, 2000);
    
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <Image style={styles.Logo} source={require('./Images/logobg.png')} />
      </View>
      <View style={styles.lowerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={value => setPassword(value)}
        />
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Set you password')}>
          Forgot Password?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Connect with us')}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>handleSignIn(email, password)}
            disabled={loading} // Disable the button if loading is true
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" /> // Show the activity indicator if loading is true
            ) : (
              <Text style={styles.btnTxt}>Sign In</Text> // Show the button text if loading is false
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ced4da',
  },
  upperContainer: {
    flex: 2,
    backgroundColor: '#ced4da',
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    top:45
  },
  lowerContainer: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    marginTop: '40%',
    padding: '3%',
  },
  input: {
    borderBottomWidth: 1,
    width: '80%',
  },
  text: {
    textAlign: 'right',
    color: 'blue',
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '5%',
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
  Logo: {
    margin: 5,
    // width: "100%",
    // resizeMode:'cover'
  },
});

export default Login;
