import React, {useState, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import Realm from 'realm';

const url = 'https://randomuser.me/api';
const MainScreen = (props) => {

    const realm = new Realm({
        schema: [
            {
                name: 'User',
                properties: {
                    firstname: 'string',
                    lastname: 'string',
                },
            },
        ],
    });

    const [users, setUsers] = useState([]);
    const addUserCallback = (user) => {
        try {
            realm.create('User', {
                firstname: user.first,
                lastname: user.last,
            });
            setUsers(realm.objects('User'));
        } catch (err) {
           alert(err)
        }
    };

    const onFetchButtonClicked = async () => {
        try {
        const res = await fetch(url);
        const user = await res.json()
        realm.write(() => addUserCallback(user.results[0].name));
        } catch (err) {
            alert(err)
        }
    }

    const onDeleteButtonClicked =  () => {
        try {

            realm.write(() => deleteUsersCallback());
        } catch (err) {
            alert(err)
        }
    }

    const deleteUsersCallback = () => {
        try {
            realm.deleteAll()
            setUsers(realm.objects('User'));
        } catch (err) {
            alert(err)
        }
    }



    return (
        <>

            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                onPress={onFetchButtonClicked}>
                <Text> Fetch </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                onPress={onDeleteButtonClicked}>
                <Text> Delete All </Text>
            </TouchableOpacity>
            {

                users.map((user, index) => (
                    <Text key={index}>
                        {user.firstName} {user.lastname}
                    </Text>

                ))
            }
        </>
    );

};

export default MainScreen;
