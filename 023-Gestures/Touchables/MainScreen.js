import React from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


const touchables = new Map([
    ['opacity', TouchableOpacity],
    ['highlight', TouchableHighlight],
    [undefined, TouchableOpacity],
]);

const Swipeable = ({label, onPress, touchable}) => {
    const Touchable = touchables.get(touchable);
    const touchableProps = {
        style: styles.myButton,
        backgroundColor: 'rgba(123,128,145,0.3)',
        onPress,
    };
    return (
        <Touchable {...touchableProps}>
            <Text style={styles.myButtonText}>{label}</Text>
        </Touchable>
    );
};

Swipeable.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    touchable: PropTypes.oneOf(['opacity', 'highlight']),
};

const MainScreen = () => {
    return (
        <>
            <Swipeable onPress={() => alert('Opacity Button Pressed')} label="Opacity Button" touchable="opacity"></Swipeable>
            <Swipeable onPress={() => alert('Highlight Button Pressed')} label="Highlight Button" touchable="highlight"></Swipeable>
        </>
    );
};
const styles = StyleSheet.create({
    myButton: {
        padding: 25,
        margin: 5,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'red',
    },
    myButtonText: {
        color: 'white',
    },
});

export default MainScreen;



