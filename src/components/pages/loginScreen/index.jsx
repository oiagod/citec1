import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import LoginForm from '../../molecules/loginForm';
import LoginFooter from '../../molecules/loginFooter';



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <SafeAreaView style={ styles.container }>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.KeyboardAvoidingContainer}
      >
      <View>
        <Image source={require('../../../assets/Logo.png')} style={ styles.logo}/>
        <LoginForm 
          navigation={navigation}
          setEmail={setEmail}
          setPassword={setPassword}
          buttonText={"Login"}
          showButtons={true}
          email={email}
          password={password}
        />
      </View>
    </KeyboardAvoidingView>
      <LoginFooter />
      <StatusBar />
    </SafeAreaView>  
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    backgroundColor: '#191919',
    paddingHorizontal: 10,
  },

  logo: {
    marginBottom: '25%',
    alignSelf: 'center',
  },

  KeyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

})

export default LoginScreen;