import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import InputEmail from '../atoms/input/inputEmail.jsx';
import InputPassword from '../atoms/input/inputPassword.jsx';
import LoginButton from '../atoms/button/login.jsx';
import InputConfirmPassowrd from '../atoms/input/inputConfirmPassowrd.jsx';

const CreateAccountForm = ({ navigation, setEmail, setPassword, buttonText, showButtons, setPassword2}) => {
    return (
        <View style={styles.container}>
            <View style={ styles.formBox }>
                <InputEmail setEmail={setEmail}/>
                <InputPassword setPassword={setPassword} showButtons={showButtons}/>
                <InputConfirmPassowrd setPassword2={setPassword2}/>
                <LoginButton navigation={navigation} buttonText={buttonText}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        justifyContent: 'flex-end',
        // marginTop: 400,
        // verticalAlign: 'top',
      },

      formBox: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center', 
        // justifyContent: 'center'
    },

})

export default CreateAccountForm;