import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { TimerPicker } from 'react-native-timer-picker';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Timer = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [frequentTimers, setFrequentTimers] = useState([]);
  const [highlightedTimer, setHighlightedTimer] = useState(null);
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('TimerClock', { selectedTime });
  };

  const addTimer = () => {
    setFrequentTimers([
      ...frequentTimers,
      { id: (frequentTimers.length + 1).toString(), label: `Timer ${frequentTimers.length + 1}`, time: selectedTime },
    ]);
  };

  const renderTimer = ({ item }) => (
    <TouchableOpacity
      style={[styles.timerItem, highlightedTimer === item.id && styles.highlighted]}
      onPress={() => setHighlightedTimer(item.id)}
    >
      <Text style={[styles.timerText, highlightedTimer === item.id && styles.highlightedText]}>
        {item.label}
      </Text>
      <Text style={[styles.timerText, highlightedTimer === item.id && styles.highlightedText]}>
        {item.time}
      </Text>
    </TouchableOpacity>
  );

  const formatTime = ({ hours, minutes, seconds }) => {
    const timeParts = [];

    if (hours !== undefined) {
      timeParts.push(hours.toString().padStart(2, '0'));
    }
    if (minutes !== undefined) {
      timeParts.push(minutes.toString().padStart(2, '0'));
    }
    if (seconds !== undefined) {
      timeParts.push(seconds.toString().padStart(2, '0'));
    }

    return timeParts.join(':');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center', top: 100 }}>
          <TimerPicker
            padWithNItems={1}
            hourLabel=":"
            minuteLabel=":"
            secondLabel=""
            LinearGradient={LinearGradient}
            styles={{
              theme: 'dark',
              backgroundColor: '#000000',
              pickerItem: {
                fontSize: 40,
              },
              pickerLabel: {
                fontSize: 32,
                marginTop: 0,
              },
              pickerContainer: {
                marginRight: 6,
              },
              pickerItemContainer: {
                width: 130,
                height: 70,
              },
              pickerLabelContainer: {
                right: -20,
                top: 0,
                bottom: 6,
                width: 40,
                alignItems: 'center',
              },
            }}
            onDurationChange={(time) => setSelectedTime(formatTime(time))}
          />
        </View>

        <View style={{ flexDirection: 'row', top: 200, justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <Text style={{ color: 'white' }}>Frequently used timers</Text>
          <TouchableOpacity onPress={addTimer}>
            <Text style={{ color: 'red' }}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={frequentTimers}
          keyExtractor={(item) => item.id}
          renderItem={renderTimer}
          style={styles.flatList}
        />
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: 'red' }]} onPress={handleNavigation}>
            <FontAwesome5Icons name={'play'} color={'#ffffff'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:30,
  },
  flatList: {
    marginTop: 20,
    top: 200,
  },
  timerItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2e2d2d',
    margin: 10,
    height: 50,
    borderRadius: 30,
  },
  highlighted: {
    borderColor: 'red',
    borderWidth: 1,
  },
  highlightedText: {
    color: 'red',
  },
  timerText: {
    color: 'white',
    fontSize: 17,
  },
});
