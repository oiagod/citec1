import React, { useState} from "react";
import { View, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform} from 'react-native';


import CreateAccountForm from "../../molecules/createAccountForm";
import LoginFooter from "../../molecules/loginFooter";
import ReturnButton from "../../atoms/button/returnButton";


const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()

// const handleEmailChange = (text) => {
//     setEmail(text);
// };

// const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handlePassword2Change = (text) => {
//     setPassword2(text);
//   };

  return (
    <SafeAreaView style={ styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        style={styles.KeyboardAvoidingContainer}
      >
          <View style={{top: 100, left: 10}} >
            <ReturnButton navigation={navigation} />
          </View>
          <View>
            <Image source={require('../../../assets/Logo.png')} style={ styles.logo}/>
            <CreateAccountForm 
              navigation={navigation}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              setPassword2={setPassword2}
              buttonText={"Criar Conta"}
              username={username}
              email={email}
              password={password}
              password2={password2}
            />
            <View styles={styles.loginbox}>
            </View>
          </View>
      </KeyboardAvoidingView>
      <LoginFooter />
        {/* <StatusBar /> */}
    </SafeAreaView>
  )

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    // justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  
  logo: {
    marginBottom: '25%',
    alignSelf: 'center',
  },

  KeyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  }

})

export default CreateAccount;