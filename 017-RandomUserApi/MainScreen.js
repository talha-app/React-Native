import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
        };
        this.onGetUserButtonPressed = this.onGetUserButtonPressed.bind(this);
    }


    onGetUserButtonPressed() {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(json => json.results)
            .then(res =>
                this.setState({results: res}),
            )
            .catch(err => alert(err));


    }


    render() {
        const {results} = this.state;
        const user = results.length == 0 ? {name: {title: '', first: '', last: ''}, picture: {large: ' '}} : results[0];
        return (
            <>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 50}}
                    onPress={this.onGetUserButtonPressed}>
                    <Text> List</Text>
                </TouchableOpacity>

                <Text>
                    {user.name.title} {user.name.first} {user.name.last}
                </Text>

                <Image style={{width: 200, height: 200}} source={{uri: user.picture.large}}/>

            </>
        );

    }


}

export {MainScreen};


