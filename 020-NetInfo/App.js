import React from 'react';
import {StyleSheet, View} from 'react-native';

import MainScreen from './MainScreen.js';


export default function App() {
    return (
        <View style={styles.container}>

            <MainScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
});
