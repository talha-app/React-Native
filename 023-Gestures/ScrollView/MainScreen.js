import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Switch, Text, View} from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {
                    new Array(7).fill(null).map((v, i) => (
                        <View key={i}>
                            <Text>Test Text </Text>
                            <ActivityIndicator size="large"></ActivityIndicator>
                            <Switch></Switch>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    scroll: {
        height: 1,
        alignSelf: 'stretch',
    },
});

export default MainScreen;


