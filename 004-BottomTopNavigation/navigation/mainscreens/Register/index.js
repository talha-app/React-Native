import React, {
    useState
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Switch
} from 'react-native';
import {
    UserInfo
} from "../../../entity/UserInfo.js"
import {
    ExceptionUtil
} from "../../../util/ExceptionUtil.js"
import StringUtil from "../../../util/StringUtil.js"
import {
    UserInfoRepository
} from '../../../repository/UserInfoRepository.js'


const RegisterScreen = () => {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [usernameValidationInfo, setUsernameValidationInfo] = useState({
        borderColor: 'gray',
        borderWidth: 1
    })

    const [nameValidationInfo, setNameValidationInfo] = useState({
        borderColor: 'gray',
        borderWidth: 1
    })

    const [passwordValidationInfo, setPasswordValidationInfo] = useState({
        borderColor: 'gray',
        borderWidth: 1
    })

    const [emailValidationInfo, setEmailValidationInfo] = useState({
        borderColor: 'gray',
        borderWidth: 1
    })

    const validate = () => {
        let count = 0
        setUsername(username.trim())

        if (username == "")
            ++count

        setName(name.trim())

        if (name == "")
            ++count

        setEmail(email.trim())

        if (email == "")
            ++count

        setPassword(password.trim())
        if (password == "")
            ++count

        return count

    }

    const clearTextInputs = () => {
        setUsername("")
        setName("")
        setEmail("")
    }

    const onSaveButtonPressed = () => {
        const count = validate()
        let message = ""

        if (count > 0) {
            alert(count + " tane alanı boş geçmişsiniz")
            return
        }
        const action = () => {
            let userInfo = UserInfoRepository.getInstance().save(new UserInfo(0, username, password, name, email))
            alert(userInfo.id)
            if (userInfo.id == 0) {
                clearTextInputs()
            }
            alert(userInfo.id == 0 ? "Kayıt yapılamadı" : "Kayıt yapılamadı")

        }

        ExceptionUtil.subscribe(action, (ex) => alert(ex.message))


    }

    const onUsernameChangeText = text => {
        if (text.trim() == "") {
            setUsernameValidationInfo({
                borderColor: 'red',
                borderWidth: 1
            })
        } else {
            setUsernameValidationInfo({
                borderColor: 'gray',
                borderWidth: 1
            })
        }
        setUsername(text)
    }

    const onNameChangeText = text => {
        if (text.trim() == "") {
            setNameValidationInfo({
                borderColor: 'red',
                borderWidth: 1
            })
        } else {
            setNameValidationInfo({
                borderColor: 'gray',
                borderWidth: 1
            })
        }
        setName(text)
    }

    const onPasswordChangeText = text => {
        if (text.trim() == "") {
            setPasswordValidationInfo({
                borderColor: 'red',
                borderWidth: 1
            })
        } else {
            setPasswordValidationInfo({
                borderColor: 'gray',
                borderWidth: 1
            })
        }
        setPassword(text)
    }

    const onEmailChangeText = text => {
        if (text.trim() == "") {
            setEmailValidationInfo({
                borderColor: 'red',
                borderWidth: 1
            })
        } else {
            setEmailValidationInfo({
                borderColor: 'gray',
                borderWidth: 1
            })
        }
        setEmail(text)
    }


    return (<
            View style={
            styles.container
        }>
            <
                TextInput text={
                username
            }
                          style={
                              {
                                  width: 200,
                                  borderColor: 'black'
                              }
                          }
                          onChangeText={
                              onUsernameChangeText
                          }
            />
            <
                TextInput text={
                name
            }
                          style={
                              {
                                  width: 200,
                                  borderColor: 'black'
                              }
                          }
                          onChangeText={
                              onNameChangeText
                          }
            />
            <
                TextInput text={
                password
            }
                          style={
                              {
                                  width: 200,
                                  borderColor: 'black'
                              }
                          }
                          onChangeText={
                              onPasswordChangeText
                          }
            />
            <
                TextInput text={
                email
            }
                          style={
                              {
                                  width: 200,
                                  borderColor: 'black'
                              }
                          }
                          onChangeText={
                              onEmailChangeText
                          }
            />
            <
                TouchableOpacity onPress={
                onSaveButtonPressed
            }
                                 style={
                                     {
                                         width: 200,
                                         height: 25,
                                         backgroundColor: 'blue'
                                     }
                                 }>
                <
                    Text style={
                    {
                        textAlign: 'center',
                    }
                }>Save
                </Text>
            </TouchableOpacity>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RegisterScreen
