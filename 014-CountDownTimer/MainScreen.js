import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const toTimeStr = date =>
    `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            counter: 35,
            clock: toTimeStr(new Date()),

        };
        this.counterInterval = null;
    }

    componentDidMount() {


        this.clockInterval = setInterval(() => this.setState(prevState => ({clock: toTimeStr(new Date())})), 1000);

    }

    componentDidUpdate() {
        const {counter} = this.state;
        if (counter == 0) {
            clearInterval(this.counterInterval);
        }
    }

    componentWillUnmount() {
        if (this.counterInterval != null) {
            clearInterval(this.counterInterval);
            this.counterInterval = null;
            this.setState({counter: 35});
        }
        clearInterval(this.clockInterval);
    }

    onStartCountDownTimer() {
        if (this.counterInterval == null) {
            this.counterInterval = setInterval(() => this.setState(prevState => ({counter: prevState.counter - 1})), 1000);
        }
    }

    render() {
        const {counter, clock} = this.state;
        return (
            <>
                <Text>{counter}</Text>
                <Text>{clock}</Text>
                <TouchableOpacity onPress={this.onStartCountDownTimer()}>
                    <Text>Start CountDownTimer</Text>
                </TouchableOpacity>
            </>
        );
    }
}

export {MainScreen};
