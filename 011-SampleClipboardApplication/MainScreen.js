import React, {Component} from 'react';
import {TextInput, Text, Switch, AppState, TouchableOpacity} from 'react-native';
import {Clipboard} from '@react-native-community/clipboard/dist/Clipboard';

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            clipboardContent: [],
        };
        this.addClipboardToArray = this.addClipboardToArray.bind(this)
    }

    componentDidMount() {
    }

    updateClipboard(str) {
        Clipboard.setString(str);
    }

    async addClipboardToArray() {
        const {clipboardContent} = this.state
        let str = await Clipboard.getString();
        clipboardContent.push(str);
        this.setState({clipboardContent:clipboardContent});
    }

    setClipboardListView(index, data) {
        return (
            <TouchableOpacity key={index}>
                <Text>{data}</Text>
            </TouchableOpacity>
        );
    }

    listClipboardArray() {

    }

    render() {
        return (
            <>
                <TextInput
                    onChangeText={text => this.updateClipboard(text)}
                    placeholder="Text"></TextInput>

                <TouchableOpacity
                    style={{width: 200, height: 25, backgroundColor: 'gray'}}
                    activeOpacity={.9}
                    onPress={() => this.addClipboardToArray()}>
                    <Text style={{}}> Add to clipboard array </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{width: 200, height: 25, backgroundColor: 'gray'}}
                    activeOpacity={.9}
                    onPress={this.listClipboardArray}>
                    <Text style={{}}> List </Text>
                </TouchableOpacity>
                {

                    this.state.clipboardContent.map((data, index) => this.setClipboardListView(index, data))
                }
            </>
        );
    }
}


export {MainScreen};
