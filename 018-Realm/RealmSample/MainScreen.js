import React, {useState,useEffect} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import Realm from 'realm';

const MainScreen = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() =>{
        setTodos(realm.objects('Todo'));
    })


    const realm = new Realm({
        schema: [
            {
                name: "Todo",
                properties: {
                    title: 'string',
                    description: 'string',
                },
            },
        ],
    });

    const [todos, setTodos] = useState([]);
    const addTodoCallback = () => {
        realm.create('Todo', {
            title: title,
            description: description,
        });
        setTodos(realm.objects('Todo'));
    };

    const onAddButtonClicked = () =>
        realm.write(addTodoCallback);


    return (
        <>
            <TextInput
                style={{width: 400, height: 45, borderColor: 'gray', borderWidth: 1}}
                placeholder="title"
                value={title}
                onChangeText={text => setTitle(text)}
            />

            <TextInput
                style={{width: 400, height: 45, borderColor: 'gray', borderWidth: 1}}
                placeholder="description"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                onPress={onAddButtonClicked}>
                <Text> Add </Text>
            </TouchableOpacity>
            {

                todos.map((todo, index) => (
                    <Text key={index}>
                        {todo.title}
                    </Text>

                ))
            }
        </>
    );

};

export default MainScreen
