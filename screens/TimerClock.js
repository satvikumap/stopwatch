import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen');

const TimerClock = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedTime } = route.params;

  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const [hours, minutes, seconds] = prevTime.split(':').map(Number);
          let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
          if (totalSeconds <= 0) {
            clearInterval(interval);
            totalSeconds = 0;
            setIsRunning(false);
          }
          const hrs = Math.floor(totalSeconds / 3600);
          const mins = Math.floor((totalSeconds % 3600) / 60);
          const secs = totalSeconds % 60;
          return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        });
      }, 1000);
      setTimer(interval);

      return () => clearInterval(interval);
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleCancel = () => {
    if (timer) {
      clearInterval(timer);
    }
    navigation.navigate('Timer');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.roundContainer}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{timeLeft}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',top:180 }}>

      {isRunning && (
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <FontAwesome5Icons name="times-circle" color={'#ffffff'} size={20} style={styles.cancelButtonText} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: 'red', marginRight: 20 }]}
          onPress={handleStartPause}
        >
          <FontAwesome5Icons
            name={isRunning ? 'pause' : 'play'}
            color={'#ffffff'}
            size={20}
          />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    marginBottom: 20,
  },
  timerText: {
    fontSize: 48,
    color: '#fff',
  },
  buttonContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#1c1a1a',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:30
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  roundContainer: {
    backgroundColor: '#1c1a1a',
    height: width - 100,
    width: width - 100,
    borderRadius: (width - 100) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
    bottom:150,
  },
});

export default TimerClock;
