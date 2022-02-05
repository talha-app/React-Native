import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mobileAppService} from '../../../global/global.js';
import {UserInfo} from '../../../entity/UserInfo';

class UserDetailsScreen extends React.Component {
    constructor(props) {

        super(props);
        this._route = props.route;
        this.state = {
            ui: new UserInfo()
        };
        this.prepareUser();
    }

    prepareUser() {
        mobileAppService.getUserById(this._route.params.userId).then(r => {
            this.setState({ui: r});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Kullanıcı Detayları</Text>
                <Text>{this.state.ui._id}</Text>
                <Text>{this.state.ui._username}</Text>
                <Text>{this.state.ui._name}</Text>
                <Text>{this.state.ui._email}</Text>
                <Text>{this.state.ui._registerDate.toString()}</Text>
                <Text>{this.state.ui._lastUpdate.toString()}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default UserDetailsScreen;
