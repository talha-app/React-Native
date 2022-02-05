import React, {Component} from 'react';
import {AppState, Text} from 'react-native';

class MainScreen extends Component {

    componentDidMount() {
        AppState.addEventListener('change', this.onAppStateChange);
        console.log('componentDidMount');
    }

    onAppStateChange(currentState) {
        console.log('currentState ', currentState);
    }

    render() {
        return (
            <>
                <Text>Main Screen</Text>
            </>
        );
    }
}


export {MainScreen};
