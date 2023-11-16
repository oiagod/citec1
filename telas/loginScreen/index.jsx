import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

export const LoginScreen = ({ navigation }) => {
  
  // AsyncStorage
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error("Erro ao salvar o email!", e);
    }
  }


  const getData = async (key) => {
    try { 
      const value = await AsyncStorage.getItem(key);
      if (value != null) {
        console.log(value);
      }
    } catch (e) {
      console.error("Erro ao buscar o Email!")
    }
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmailChange = (text) => {
    setEmail(text);
    storeData('key-email', text);
  };


  const handlePasswordChange = (text) => {
    setPassword(text);
    storeData('key-password', text);
  };

  const forgotPassword = () => {
    navigation.navigate("ForgotPassword")
  };

  const handleLogin = () => {
    navigation.navigate("HomeScreen")
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  const loginGoogle = () => {
    console.log("Login using google");
  };

  const loginApple = () => {
    console.log("Login using apple");
    getData('key-email');
  };

  const loginFacebook = () => {
    console.log("Login using facebook");
  };

  return (
    <View style={{ height: '100%', backgroundColor: '#191919' }}>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 25, alignItems: 'center' }}>
          <View style={styles.logo}>
            <Image source={require('../../Assets/Logo.png')} />
          </View>
          <View style={{alignItems: 'center', position: 'absolute'}}>
            <View style={styles.loginbox}>
              <TextInput style={styles.inputEmail} placeholder='Email ' placeholderTextColor="#C3C3C3" keyboardType='email-address' onChangeText={handleEmailChange} />
            </View>
            <View style={styles.loginbox}>
              <TextInput style={styles.inputPassword} placeholder='Senha' placeholderTextColor="#C3C3C3" secureTextEntry={true} onChangeText={handlePasswordChange} />
              <TouchableOpacity onPress={forgotPassword} style={{ justifyContent: 'center', paddingRight: 10 }}>
                <Text style={styles.textWhite}>Esqueceu?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")} style={{ alignSelf: 'flex-end', paddingRight: 30, marginBottom: 20 }}>
              <Text style={styles.textWhite}>Criar Conta</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linha} />
              <Text style={styles.textWhite}>ou</Text>
              <View style={styles.linha} />
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={styles.gafbutton} onPress={loginGoogle}>
                <Image source={require('../../Assets/Google.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.gafbutton} onPress={loginApple}>
                <Image source={require('../../Assets/Apple.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.gafbutton} onPress={loginFacebook}>
                <Image source={require('../../Assets/Facebook.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center'
  },

  inputEmail: {
    paddingLeft: 10,
    color: '#C3C3C3',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    width: '100%'
  },

  inputPassword: {
    paddingLeft: 10,
    color: '#C3C3C3',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    width: '70%'
  },

  loginbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#1e2817',
    // O correto seria colocar a cor #43AF00 e uma opacidade de 0.1, mas sem alterar a opacidade da letra interna
  },

  loginbutton: {
    width: '90%',
    backgroundColor: '#004222',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
    height: 50,
  },

  loginButtonText: {
    color: '#C3C3C3',
    fontSize: 25,
    fontFamily: 'Montserrat-SemiBold',
  },

  logo: {
    marginBottom: 60,
    alignItems: 'center',
    position: 'absolute',
    top: -250
  },

  linha: {
    backgroundColor: '#004222',
    height: 2,
    width: '33%',
    marginHorizontal: 30,
  },

  textWhite: {
    color: '#C3C3C3',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },

  gafbutton: {
    marginHorizontal: 20,
  },

 
});