import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import InputEmail from '../atoms/input/inputEmail.jsx';
import InputPassword from '../atoms/input/inputPassword.jsx';
import LoginButton from '../atoms/button/login.jsx';
import CreateAccountButton from '../atoms/button/createAcc.jsx';
import InputConfirmPassowrd from '../atoms/input/inputConfirmPassowrd.jsx';

const LoginForm = ({ navigation, setEmail, setPassword, buttonText, showButtons,}) => {
    return (
        <View style={styles.container}>
            <View style={ styles.formBox }>
                <InputEmail setEmail={setEmail}/>
                <InputPassword navigation={navigation} setPassword={setPassword} showButtons={showButtons}/>
                <LoginButton navigation={navigation} buttonText={buttonText}/>
                {showButtons && (
                    <CreateAccountButton navigation={navigation} style={styles.createButton}/>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        // verticalAlign: 'top',
      },

      formBox: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        alignSelf: 'stretch',
        // justifyContent: 'center'
    },

    createButton: {

    },
})

export default LoginForm;