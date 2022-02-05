import React, {Component} from 'react';
class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isFetching: false,
            username: '',
            title: '',
            description: '',
            start: '',
            expected: '',
            todoId: '0',
        };
        this.onSaveButtonPressed = this.onSaveButtonPressed.bind(this);
        this.onListButtonPressed = this.onListButtonPressed.bind(this);
    }


    onSaveButtonPressed() {
        const {data, isFetching, username, title, description, start, expected, todoId} = this.state;
        fetch(`http://192.168.1.39:50500/api/todos/save`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username" : username,
                "title" : title,
                "description" : description,
                "start" : start,
                "expected" : expected,
            }),
        })
            .then(response => response.json())
            .then(todo => this.setState({todoId: todo.todoId}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}));
    }

    onListButtonPressed() {
        const {data, isFetching, username, title, description, start, expected, todoId} = this.state;
        fetch(`http://192.168.1.39:50500/api/todos/all`)
            .then(response => response.json())
            .then(todo => this.setState({data: todo}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}));

    }


    render() {
        const {data, isFetching, username, title, description, start, expected, todoId} = this.state;
        return (
            <>
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({username: text})}
                    value={username}
                    placeholder="username"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({title: text})}
                    value={title}
                    placeholder="title"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({description: text})}
                    value={description}
                    placeholder="description"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({start: text})}
                    value={start}
                    placeholder="start"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({expected: text})}
                    value={expected}
                    placeholder="expected"
                />
                <Text>
                    {todoId}
                </Text>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                    onPress={this.onSaveButtonPressed}>
                    <Text> Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                    onPress={this.onListButtonPressed}>
                    <Text> List</Text>
                </TouchableOpacity>
                {
                    isFetching ? <ActivityIndicator/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({id}, index) => `${index}`}
                            renderItem={({item}) => (
                                <Text>{item.title} - {item.description}</Text>
                            )}
                        />
                    )
                }
            </>
        );

    }


}

import {ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';

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


