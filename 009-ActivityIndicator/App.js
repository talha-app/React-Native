import React, {useState} from 'react';
import {Pressable, StyleSheet, View, ActivityIndicator, Text} from 'react-native';


export default function App() {
    const [animating, setAnimating] = useState(false);
    const [pressText, setPressText] = useState('');
    const [count, setCount] = useState(0);

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));

    };

    const onPressablePressIn = async () => {
        setPressText('Press In');
        setAnimating(true);
        await wait(3000);
        setAnimating(false);


    };

    const onPressableLongPress = () => {
        setPressText('Long Press:');
        setCount(count + 1);
    };

    const onPressablePressOut = () => {
        setPressText('Press Out');
    };
    const onPressablePress = () => {
        setPressText('Press');
        setCount(count + 1);
    };
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={animating} size="small" color="#FF0000"/>
            <ActivityIndicator animating={animating} size="large" color="#0000FF"/>

            <Pressable
                onPressIn={onPressablePressIn}
                onLongPress={onPressableLongPress}
                onPressOut={onPressablePressOut}
                onPress={onPressablePress}
            >
                <Text>{pressText}:{count}</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
