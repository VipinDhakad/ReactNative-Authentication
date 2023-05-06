import React from 'react'
import{
    Text,
    View,
    StyleSheet
} from 'react-native';
export default function Details() {
  return (
    <View style={styles.mainContainer}>
      <Text>Detail Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  }
})