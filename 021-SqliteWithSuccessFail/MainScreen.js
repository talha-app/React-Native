import React, {Component} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {Text, View} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {users: []};

        this.db = SQLite.openDatabase({
                name: 'todosdb',
                createFromLocation : 1
            },
            this.success.bind(this),
            this.fail);

        SQLite.enablePromise(true);
    }

    success = () => {

        this.db.transaction(
            t => {
                t.executeSql('select * from users', [], (t, allUsers) => {
                    let length = allUsers.rows.length;
                    let userList = [];
                    for (let i = 0; i < length; i++) {
                        userList.push(allUsers.rows.item(i));
                    }
                    this.setState({users: userList});
                });
            },
        );
    };

    fail = error => {
        alert(error);
    };


    render() {
        const {users} = this.state;
        return (
            <>
                {
                    users.map((item, index) => {
                        return(
                            <View key = {index}>
                                <Text> {item.username} {item.name} </Text>
                            </View>
                        )
                    })
                }

            </>
        );
    }
}

export default MainScreen;


