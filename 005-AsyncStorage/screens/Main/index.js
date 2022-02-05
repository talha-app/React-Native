import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MainScreen = () => {
    const personKeyPrefix = '@person:';
    const getKey = (prefix, suffix) => `${prefix}${suffix}`;
    const [people, setPeople] = useState([]);
    const [nameInputText, setNameInputText] = useState('');
    const [emailInputText, setEmailInputText] = useState('');

    const onNameChangeText = (text) => {
        setNameInputText(text);
    };

    const onEmailChangeText = (text) => {
        setEmailInputText(text);
    };

    const onSaveButtonPressed = async () => {
        await savePerson();
    };

    const onListButtonPressed = async () => {
        setPeople(await retrievePeople());
    };

    const onClearButtonPressed = async () => {
        setPeople([]);
        let keys = await AsyncStorage.getAllKeys();
        keys = keys.filter(key => key.startsWith(personKeyPrefix));
        await AsyncStorage.multiRemove(keys);
    };

    const setPeopleList = (p) => (
        <TouchableOpacity key={p.email} onPress={() => {
        }} style={{width: 200, height: 25}}>
            <Text style={{textAlign: 'center', backgroundColor: 'green'}}>
                {p.name}
            </Text>
        </TouchableOpacity>
    );

    const savePerson = async () => {

        try {
            const key = getKey(personKeyPrefix, emailInputText);
            const result = await AsyncStorage.getItem(key);
            if (result != null) {
                alert(`${emailInputText} null değil`);
            }
            await AsyncStorage.setItem(key, JSON.stringify({name: nameInputText, email: emailInputText}));
            alert('mesaj kaydedildi');
        } catch (error) {
            alert(error.message);
        }
    };

    const retrievePeople = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            if (keys == 0) {
                alert('hiç veri eklenmemiş');
            }
            const peopleKeys = keys.filter(key => key.startsWith(personKeyPrefix));
            const peopleInfo = await AsyncStorage.multiGet(peopleKeys);
            return peopleInfo.map(p => JSON.parse(p[1]));

        } catch (error) {
            alert(error.message);
        }


    };

    return (
        <View style={styles.container}>
            <TextInput
                value={emailInputText}
                style={{width: 200}}
                onChangeText={onEmailChangeText}
                placeholder="Email Giriniz giriniz"/>

            <TextInput
                value={nameInputText}
                style={{width: 200}}
                onChangeText={onNameChangeText}
                placeholder="İsim Giriniz giriniz"/>

            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onSaveButtonPressed}>
                <Text style={{textAlign: 'center'}}>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onListButtonPressed}>
                <Text style={{textAlign: 'center'}}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{width: 200, backgroundColor: 'gray'}}
                onPress={onClearButtonPressed}>
                <Text style={{textAlign: 'center'}}>Tümünü Sil</Text>
            </TouchableOpacity>
            {
                people.map(p => setPeopleList(p))
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
export default MainScreen;
