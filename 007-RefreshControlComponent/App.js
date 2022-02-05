import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View, Text} from 'react-native';


export default function App() {
    const [refreshing, setRefreshing] = useState(false);
    const [count, setCount] = useState(0);
    const wait = timeout => new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
    const onRefresh = async () => {
        setRefreshing(true);
        await wait(3000);
        setRefreshing(false);
        setCount(count+1)
    };
    return (
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle = {styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                <Text>Tazelemek için aşağıya çekiniz </Text>
                <Text>{count.toString()} </Text>
                <Text>  {refreshing.toString()}</Text>
            </ScrollView>
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
