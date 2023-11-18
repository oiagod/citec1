import React, { useState} from "react";
import { View, StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';

import LoginForm from "../../molecules/loginForm";
import LoginFooter from "../../molecules/loginFooter";
import ReturnButton from "../../atoms/button/returnButton";
import InputConfirmPassowrd from "../../atoms/input/inputConfirmPassowrd";

const CreateAccount = ({ navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()



const handleEmailChange = (text) => {
    setEmail(text);
};

const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePassword2Change = (text) => {
    setPassword2(text);
  };

  return (
    <SafeAreaView style={ styles.container}>
        <ReturnButton navigation={navigation}/>
        <View>
        <Image source={require('../../../assets/Logo.png')} style={ styles.logo}/>
        <LoginForm
            navigation={navigation}
            setEmail={setEmail}
            setPassword={setPassword}
            setPassword2={setPassword2}
            buttonText={"Criar conta"}
            showButtons={false}
            showInputConfirm={false}
        />
        <InputConfirmPassowrd placeholderText={"Confirmar senha"}/>
        </View>
        <LoginFooter />
        {/* <StatusBar /> */}
    </SafeAreaView>
  )

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  
  logo: {
    // marginBottom: 60,
    alignItems: 'center',
    position: 'absolute',
    top: -250,
    right: 90,
  },

})

export default CreateAccount;