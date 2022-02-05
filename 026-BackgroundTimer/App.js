import React, { useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import BackgroundTimer from "react-native-background-timer";

const App = () => {
  const [seconds, setSeconds] = useState(10);
  const [timerOn, setTimerOn] = useState(false);
  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSeconds(s => {
        return s > 0 ? s - 1 : 0;
      });
    }, 1000);
  };

  useEffect(() => {
    if (timerOn)
      startTimer();
    else
      BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);
  
  useEffect(() => {
    if (seconds === 0) BackgroundTimer.stopBackgroundTimer();
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{seconds}</Text>
      <Button title="Start/Stop" onPress={() => setTimerOn(!timerOn)}></Button>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Platform.OS === "ios" ? "blue" : "green",
  },
  time: {
    fontSize: 25,
    color: Platform.OS === "android" ? "black" : "white",
    marginBottom: 25,
    textAlign: "center",
  },
});

export default App;
