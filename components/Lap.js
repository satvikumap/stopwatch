import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('screen');

export default function Lap({ results }) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    let milliseconds = centiseconds % 100;
    seconds = Math.floor(centiseconds / 100) % 60;
    minutes = Math.floor(centiseconds / 6000);

    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(seconds),
      milliseconds: padToTwo(milliseconds),
    };
  };

  const formatTime = (centiseconds) => {
    const { minutes, seconds, milliseconds } = displayTime(centiseconds);
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const calculateDifference = (index) => {
    if (index === 0) return 0;
    return results[index - 1] - results[index];
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lap No</Text>
        <Text style={styles.titleText}>Lap Time</Text>
        <Text style={styles.titleText}>Difference</Text>
      </View>

      <FlatList
        data={results}
        renderItem={({ item, index }) => {
          const lapTime = formatTime(item);
          const difference = formatTime(calculateDifference(index));

          return (
            <View style={styles.lapItem}>
              <Text style={styles.lapText}>{results.length - index}</Text>
              <Text style={styles.lapText}>{lapTime}</Text>
              <Text style={styles.lapText}>{difference}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
    paddingVertical: 10,
  },
  titleText: {
    color: '#2d2d2d',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
    marginVertical: 10,
  },
  lapText: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
});
