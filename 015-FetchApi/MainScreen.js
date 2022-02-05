import React, {Component} from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const url = 'https://api.github.com/users' //GET

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isFetching: false,
        };

    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    render() {
        const {data, isFetching} = this.state;
        return (
            <>
                {
                    isFetching ? <ActivityIndicator/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({id}, index) => `${index}`}
                            renderItem={({item}) => (
                                <Text>{item.id} - {item.login}</Text>
                            )}
                        />
                    )
                }
            </>
        );

    }

}

const styles = StyleSheet.create({
    posShow: {
        textAlign: 'center',
        zIndex: 1,
        marginTop: 50,
        position: 'absolute',

    },
    button: {
        textAlign: 'center',
        marginTop: 80,
        position: 'absolute',

    },
    square: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },

});
export {MainScreen};


