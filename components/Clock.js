import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('screen');
import { colors } from '../utilities/style';

export default function Clock({ time }) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    milliseconds = Math.floor(centiseconds / 100) % 60;
    seconds = Math.floor(centiseconds / 6000);
    minutes = Math.floor(centiseconds / 60000);

    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(seconds),
      milliseconds: padToTwo(milliseconds),
    };
  };

  const { minutes, seconds, milliseconds } = displayTime(time);

  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.minutesText}>{minutes}:</Text>
          <Text style={styles.secondsText}>{seconds}.</Text>
          <Text style={styles.secondsText}>{milliseconds}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContainer: {
    backgroundColor: "#1c1a1a",
    height: width - 100,
    width: width - 100,
    borderRadius: (width - 100) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minutesText: {
    fontSize: 50,
    color: 'white',
  },
  secondsText: {
    fontSize: 50,
    color: 'red',
  }
});
