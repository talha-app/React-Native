import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Switch} from 'react-native';

import {ExceptionUtil} from '../../../util/ExceptionUtil.js';
import {mobileAppService} from '../../../global/global.js';
import {buttonDeleteAllUsersText, buttonListUsersText} from '../../../resource/Resource.js';
import {alertUnexpectedStateText, alertNoSuchUserText} from '../../../resource/Resource.js';

const ListScreen = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [deleteSwitchEnabled, setDeleteSwitchEnabled] = useState(false);

    const onListViewTouchableOpacityPress = async ui => {
        const action = async ui => {
            navigation.navigate('UserDetails', {userId:ui._id});
        };
        ExceptionUtil.subscribe(() => action(ui), {})

    };

    const setListView = ui => (
        <TouchableOpacity key={ui._id} onPress={() => {
            onListViewTouchableOpacityPress(ui);
        }}
                          style={{width: 200, height: 25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ui._username}</Text>
        </TouchableOpacity>
    );

    const onDeleteAllUsersButtonPressed = () => {
        const action = () => {
            mobileAppService.deleteAllUsers();
            setUsers(mobileAppService.getAllUsers());
            setDeleteSwitchEnabled(false);
        };
        ExceptionUtil.subscribe(action, () => alert(alertUnexpectedStateText));
    };

    const onListButtonPressed = () => {
        const action = async () => {
            const allUsers = await mobileAppService.getAllUsers();
            if (allUsers.length != 0) {
                setUsers(allUsers);

            } else {
                alert(alertNoSuchUserText);
            }
        };
        ExceptionUtil.subscribe(action, () => alert(alertInvalidOperationText));
    };
    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <TouchableOpacity onPress={onDeleteAllUsersButtonPressed}
                              style={{width: 200, height: 25, backgroundColor: 'red'}} disabled={!deleteSwitchEnabled}>
                <Text style={{textAlign: 'center'}}>{buttonDeleteAllUsersText}</Text>
            </TouchableOpacity>
            <Switch
                onValueChange={() => setDeleteSwitchEnabled(!deleteSwitchEnabled)}
                value={deleteSwitchEnabled}/>
            <TouchableOpacity onPress={onListButtonPressed}
                              style={{width: 200, height: 25, backgroundColor: 'gray'}}>
                <Text style={{textAlign: 'center'}}>{buttonListUsersText}</Text>
            </TouchableOpacity>
            {
                users.map((u) => setListView(u))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ListScreen;
