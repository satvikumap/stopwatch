import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const WorldClock = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',color:'#FFFFFF',fontSize:40}}>WorldClock</Text>
    </View>
  )
}

export default WorldClock

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignContent:'center',
  },
});