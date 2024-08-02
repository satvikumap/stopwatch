import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './Routes/Tabs';

const App = () => {
  return (  
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'black'}/>
      <NavigationContainer>
      <Tabs />
      </NavigationContainer>
    </View>
      
  );
}



export default App;
