import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
  
  const {height, width} = Dimensions.get('screen');
  

  
  export default function Controllers({
    isRunning,
    handleStart,
    handleLap,
    handleStop,
  }) {
    return (
      <View style={styles.container}>
      {isRunning &&
       <>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: "#2d2d2d"}]}
          onPress={() => handleStop()}>
          <FontAwesome5Icons name="redo" color={'#ffffff'} size={20} />
        </TouchableOpacity>
      </>
      }
       
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: "red"}]}
          onPress={() => handleStart()}>
          <FontAwesome5Icons
            name={isRunning ? 'pause' : 'play'}
            color={'#ffffff'}
            size={20}
          />
        </TouchableOpacity>

        {isRunning &&
           <>
            <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: "#2d2d2d"}]}
            onPress={() => handleLap()}>
            <FontAwesome5Icons name="flag" color={'#fff'} size={20} />
            </TouchableOpacity>
          </>
        }

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      width: width,
    },
    buttonContainer: {
      height: 70,
      width: 70,
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });