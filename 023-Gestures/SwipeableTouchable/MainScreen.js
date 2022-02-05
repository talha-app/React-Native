import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';


const Swipeable = ({onSwipe, name}) => {
    const onScroll = e => {
        e.nativeEvent.contentOffset.x === 200 && onSwipe();
    };
    const scrollProps = {
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        scrollEventThrottle: 10,
        onScroll,
    };
    return (
        <View style={styles.swipe}>
            <ScrollView {...scrollProps}>
                <TouchableOpacity>
                    <View style={styles.swipeItem}>
                        <Text style={styles.swipeText}>{name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.swipeEmpty}/>
            </ScrollView>
        </View>
    );
};

Swipeable.propTypes = {
    onSwipe: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    swipe: {
        flex: 1,
        flexDirection: 'row',
        width: 200,
        height: 25,
        marginTop: 25,
    },
    swipeItem: {
        width: 200,
        height: 25,
        backgroundColor: 'azure',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'slategrey',
    },
    swipeText: {
        textAlign: 'center',
        color: 'slategrey',
    },
    swipeEmpty: {
        width: 200,
        height: 25,
    },

});

export default Swipeable;



