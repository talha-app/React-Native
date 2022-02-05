import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export default function App() {
    const [pressText, setPressText] = useState('');
    const [count, setCount] = useState(0);

    const onPressablePressIn = () => {
        setPressText('In');
        setCount(count + 1);
    };
    const onPressabLonglePress = () => {
        setPressText('Long ');
        setCount(count + 1);
    };
    const onPressablePress = () => {
        setPressText('onPressablePress');
        setCount(count + 1);
    };
    const onPressablePressOut = () => {
        setPressText('Out');
        setCount(count + 1);
    };
    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={onPressablePressIn}
                onLongPress={onPressabLonglePress}
                onPress={onPressablePress}
                onPressOut={onPressablePressOut}>
                <Text>{pressText} : {count}</Text>
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
    scrollView: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
