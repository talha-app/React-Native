import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, ImageBackground} from 'react-native';


const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: 30,
        textAlign: 'center',
    },

});

class MainScreen extends Component {

    constructor() {
        super();
        this.state = {
            scaleWidth: 100,
            scaleHeight: 100,
        };

    }

    onDecrementButtonPressed() {
        const {scaleWidth, scaleHeight} = this.state;
        this.setState({scaleWidth: scaleWidth - 20, scaleHeight: scaleHeight - 20});
    }

    onIncrementButtonPressed() {
        const {scaleWidth, scaleHeight} = this.state;
        this.setState({scaleWidth: scaleWidth + 20, scaleHeight: scaleHeight + 20});
    }

    render() {
        const {scaleWidth, scaleHeight} = this.state;
        return (
            <>
                <ImageBackground style={styles.image}
                                 source={{uri: 'https://i2.cnnturk.com/i/cnnturk/75/800x400/57f7aba4ac1fe33818711dbb'}}>
                    <Image
                        source={{uri: 'https://www.ufuktur.com/Content/ProductImage/Original/636327175041406250-uskudar.jpg'}}
                        style={{width: scaleWidth, height: scaleHeight}}
                        onLoad={() => {
                        }}
                        onLoadEnd={() => {
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => this.onIncrementButtonPressed()}>
                        <Text style={{fontSize: 20, width: 200, backgroundColor: 'blue'}}>Artır</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onDecrementButtonPressed()}>
                        <Text style={{fontSize: 20, width: 200, backgroundColor: 'red'}}>Azalt</Text>
                    </TouchableOpacity>

                </ImageBackground>

            </>


        );
    }
}


export {MainScreen};
