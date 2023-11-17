import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import LoginForm from '../../src/components/molecules/loginForm';
import LoginFooter from '../../src/components/molecules/loginFooter';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <LoginForm />
        <LoginFooter />
      </View>
    </SafeAreaView>  
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

})

export default LoginScreen;