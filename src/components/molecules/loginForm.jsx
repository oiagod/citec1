import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import InputEmail from '../atoms/input/inputEmail.jsx';
import InputPassword from '../atoms/input/inputPassword.jsx';
import LoginButton from '../atoms/button/index.jsx';

const LoginForm = () => {
    return (
        <View style={ styles.formBox }>
            <InputEmail />
            <InputPassword />
            <LoginButton />
        </View>
    )
}

const styles = StyleSheet.create ({
      formBox: {
        alignItems: 'center', 
        // Está mexendo na lateral
        // position: 'absolute',

    },
})

export default LoginForm;