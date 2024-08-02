import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Alarm() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',color:'#FFFFFF',fontSize:40}}>Alarm</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignContent:'center',
  },
});
