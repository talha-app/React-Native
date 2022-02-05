import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MainScreen} from './MainScreen.js';


export default function App() {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>

            <MainScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
