import React, {useState, useContext} from 'react'
import{
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../context/AuthenticationProvider';
function SignUp() {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [loading, setLoading] = useState(false)

  const handleSignUp=(emailID, pass)=>{
    setLoading(true);
    register(emailID, pass);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
  };

  const {register} = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}></View>
      <ScrollView style={styles.scroll}>
      <View style={styles.lowerContainer}>
        <TextInput style={styles.input} placeholder='Username' autoCapitalize='none'/>
        <TextInput style={styles.input} placeholder='Mobile Number'  keyboardType='number-pad'/>
        <TextInput style={styles.input} placeholder='Email' onChangeText={(value)=>setEmail(value)}/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry onChangeText={(value)=>setPassword(value)}/>
        <TextInput style={styles.input} placeholder='Confirm Password' />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={()=>handleSignUp(email, password)} disabled={loading}>
          {loading ? (
              <ActivityIndicator size="small" color="#ffffff" /> // Show the activity indicator if loading is true
            ) : (
              <Text style={styles.btnTxt}>Sign In</Text> // Show the button text if loading is false
            )}
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
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
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
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
      width:'55%',
      borderRadius:10
    },
    btnTxt:{
      textAlign:'center',
      color:"white"
    },
    // scroll:{
    //     marginBottom:0,
    //     paddingBottom:0
    // }
    
  });
  
export default SignUp;
