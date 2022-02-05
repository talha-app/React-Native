import React, {useState} from 'react';
  import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';


const SampleComponent = props => {
  const [name,setName] = useState("")
  const [surname,setSurname] = useState("")
  const [fullName,setFullName] = useState("")
  const [isUpdated,setIsUpdated] = useState(false)

    const showAlert = () => {
      Alert.alert("Uyarı", "Daha önce işlem yapmadınız emin misiniz?",
        [
          {
            text: "İptal",
            onPress: ()=> {}
          },
          {
            text: "Hayır",
            onPress: ()=> {setResultText("Hayır")}
          },
          {
            text: "Evet",
            onPress: ()=> {clearTextInputs()}
          },

        ]

      )
    }

    const clearTextInputs = () => {
      setName("")
      setSurname("")
    }


    const onOKButtonPressed = () => {
      setFullName(name  + " "  +surname)
      setIsUpdated(false)

    }

    const onClearButtonPressed = () => {
      if(isUpdated)
        showAlert()
      else {
            clearTextInputs()
        }

    }

    const onNameChangeText = text => {
      setIsUpdated(true)
      setName(text)
    }

    const onSurnameChangeText = text => {
      setIsUpdated(true)
      setSurname(text)
    }

    return (
        <View>
            <TextInput value={name}  onChangeText={onNameChangeText }  placeholder="name"/>
            <TextInput value={surname}  onChangeText={onSurnameChangeText }  placeholder="surname"/>
            <Text>{fullName}</Text>

            <TouchableOpacity onPress={onOKButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>OK</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClearButtonPressed}
                style={{width: 200, height:25, backgroundColor: 'blue'}}>
                <Text style={{textAlign: 'center'}}>Clear</Text>
            </TouchableOpacity>


        </View>
    )
}
export {SampleComponent}
