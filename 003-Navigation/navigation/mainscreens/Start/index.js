import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View,Text} from 'react-native';

const StartScreen = ({navigation}) => {
    return(
      <View style = {styles.container}>
          <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
              <Text>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{borderColor:'red'}} onPress = {() => navigation.navigate('Register')}>
              <Text>Register </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate('List')}>
              <Text>List </Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartScreen
