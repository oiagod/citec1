import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import InputEmail from '../atoms/input/inputEmail.jsx';
import InputPassword from '../atoms/input/inputPassword.jsx';
import CreateAccountButton from '../atoms/button/createAccount.jsx';
import InputConfirmPassowrd from '../atoms/input/inputConfirmPassowrd.jsx';
import InputText from '../atoms/input/inputText.jsx';

const CreateAccountForm = ({ navigation, setUsername, setEmail, setPassword, buttonText, showButtons, setPassword2, username, email, password, password2}) => {
    return (
        <View style={styles.container}>
            <View style={ styles.formBox }>
                <InputText setUsername={setUsername}/>
                <InputEmail setEmail={setEmail}/>
                <InputPassword setPassword={setPassword} showButtons={showButtons}/>
                <InputConfirmPassowrd setPassword2={setPassword2}/>
                <CreateAccountButton navigation={navigation} buttonText={buttonText} username={username} email={email} password={password} password2={password2}/>
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