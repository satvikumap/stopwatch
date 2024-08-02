import { View, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useRef, useCallback } from 'react';
import Clock from '../components/Clock';
import Lap from '../components/Lap';
import Controllers from '../components/Controllers';

export default function Stopwatchs() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const timer = useRef(null);

  const handleStart = useCallback(() => {
    if (!isRunning) {
      timer.current = setInterval(() => {
        setTime(prevTime => prevTime + 100); 
      }, 100); 
      setIsRunning(true);
    } else {
      clearInterval(timer.current);
      setIsRunning(false);
    }
  }, [isRunning]);

  const handleLap = useCallback(() => {
    if (isRunning) {
      setResults(prevState => [time, ...prevState]);
    }
  }, [isRunning, time]);

  const handleStop = useCallback(() => {
    clearInterval(timer.current);
    setTime(0);
    setResults([]);
    setIsRunning(false);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ flex: 50 }}>
        <Clock time={time} />
      </View>
      <View style={{ flex: 38 }}>
        <Lap results={results} />
      </View>
      <View style={{ flex: 12 }}>
        <Controllers
          isRunning={isRunning}
          handleStart={handleStart}
          handleLap={handleLap}
          handleStop={handleStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
