import React, {Component} from 'react';
import axios from 'axios';

const saveEndpoint = 'http://192.168.1.36:50500/api/todos/save';

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isFetching: false,
            username: 'testUser',
            title: 'title',
            description: 'desc',
            start: '01/01/2022',
            expected: '01/01/2023',
            todoId: '0',
        };
        this.onSaveButtonPressed = this.onSaveButtonPressed.bind(this);
        this.onListButtonPressed = this.onListButtonPressed.bind(this);
    }


    async onSaveButtonPressed() {
        const {data, isFetching, username, title, description, start, expected, todoId} = this.state;

        let body = {
            'username': username,
            'title': title,
            'description': description,
            'start': start,
            'expected': expected,
        };

        try {
            const response = await axios.post(saveEndpoint, body);
            const todo = response.data;
            this.setState({todoId: todo.todoId});
        } catch (ex) {
            alert(ex);
        } finally {
            this.setState({isFetching: false});
        }


    }

    async onListButtonPressed() {
        const {data, isFetching, username, title, description, start, expected, todoId} = this.state;
        const response = await fetch(`http://192.168.1.36:50500/api/todos/all`);
        const json = await response.json();
        this.setState({data: json});
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


