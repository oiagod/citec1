import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import LoginForm from '../../molecules/loginForm';
import LoginFooter from '../../molecules/loginFooter';



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <Image source={require('../../../assets/Logo.png')} style={ styles.logo}/>
        <LoginForm 
          navigation={navigation}
          setEmail={setEmail}
          setPassword={setPassword}
          buttonText={"Login"}
          showButtons={true}
        />
      </View>
      <LoginFooter />
      <StatusBar />
    </SafeAreaView>  
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'space-evenly',
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

export default LoginScreen;