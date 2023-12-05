import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import InputEmail from '../atoms/input/inputEmail.jsx';
import InputPassword from '../atoms/input/inputPassword.jsx';
import CreateAccountButton from '../atoms/button/createAccount.jsx';
import InputConfirmPassowrd from '../atoms/input/inputConfirmPassowrd.jsx';

const CreateAccountForm = ({ navigation, setEmail, setPassword, buttonText, showButtons, setPassword2, email, password, password2}) => {
    return (
        <View style={styles.container}>
            <View style={ styles.formBox }>
                <InputEmail setEmail={setEmail}/>
                <InputPassword navigation={navigation} setPassword={setPassword} showButtons={showButtons}/>
                <InputConfirmPassowrd setPassword2={setPassword2}/>
                <CreateAccountButton navigation={navigation} buttonText={buttonText} email={email} password={password} password2={password2}/>
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