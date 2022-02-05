import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Swipeable from './MainScreen';


export default function App() {
    const [items, setItems] = useState(
        new Array(10).fill(null).map((v, id) => ({id, name: 'OK'})),
    );

    const onSwipe = id => () => setItems(items.filter(it => it.id != id));
    return (
        <>
            {
                items.map(item => (
                    <Swipeable key={item.id} onSwipe={onSwipe(item.id)} name={item.name}
                                     onPress={() => alert(`${item.name}-${item.id}`)}/>
                ))
            }
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});
