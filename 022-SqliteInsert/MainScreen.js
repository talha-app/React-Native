import React, {Component} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const allUsersSQL = 'select * from users';
const saveUserSQL = 'insert into users (name,username,password) values (?,?,?)';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], username: '', name: '', password: ''};
        this.db = null;
    }

     async componentDidMount() {
         SQLite.enablePromise(true);
         this.db = await SQLite.openDatabase({
             name: 'todosdb',
             createFromLocation: 1,
         });
     }

    saveUser = t => {
        const {username, name, password} = this.state;
        t.executeSql(saveUserSQL, [name, username, password], (t, results) => {
            if (results.rowsAffected > 0) {
                alert('Kayıt başarıyla eklendi');
            } else {
                alert('Bir sorun oluştu');
            }
        });
    };

    onSaveUser = async () => {
        this.db.transaction(t => this.saveUser(t));
    };

    onViewAllUsers = async () => {
        this.db.transaction(
            t => {
                t.executeSql(allUsersSQL, [], (t, allUsers) => {
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
        const {users, name, username, password} = this.state
        return (
            <View>
                <TextInput
                    style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({username:text})}
                    value={username}/>
                <TextInput
                    style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({name:text})}
                    value={name}/>
                <TextInput
                    style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({password:text})}
                    value={password}/>

                <TouchableOpacity onPress={() => this.onSaveUser()}>
                    <Text>Kaydet</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onViewAllUsers()}>
                    <Text>Tüm Kullanıcıları Listele </Text>
                </TouchableOpacity>
                {
                    users.map((item, index) => {
                        return (
                            <View style={{alignItems: 'center', justifyContent: 'center'}} key={index}>
                                <Text> {item.username} {item.name} </Text>
                            </View>
                        );
                    })
                }

            </View>
        );
    }

}

const style = {borderWidth: 1, borderColor: 'black', width: 350, height: 40};

export default MainScreen;


