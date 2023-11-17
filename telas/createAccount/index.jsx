import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';


export const CreateAccount = ({ navigation }) => {

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

  const handleConfirmation = () => {
    // Adicionar lógica para autenticar o usuário
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Password: ", password2);
  };

  const loginGoogle = () => {
    console.log("Login using google");
  };

  const loginApple = () => {
    console.log("Login using apple");
  };

  const loginFacebook = () => {
    console.log("Login using facebook");
  };

  const returnPage = () => {
    navigation.goBack();
  }


  return (
    <View style={{ height: '100%', backgroundColor: '#191919' }}>
      <TouchableOpacity style={styles.returnButton} onPress={returnPage}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 50, color: '#C3C3C3' }}>‹</Text>
        </View>
      </TouchableOpacity>
      <SafeAreaView style={styles.container}>
        <View style={{ paddingHorizontal: 25, alignItems: 'center' }}>
          <View style={styles.logo}>
            <Image source={require('../../src/assets/Logo.png')} />
          </View>
          <View style={{ alignItems: 'center', position: 'absolute', top: -70 }}>
            <View style={styles.loginbox}>
              <TextInput style={styles.inputEmail} placeholder='Email ' placeholderTextColor="#C3C3C3" keyboardType='email-address' onChangeText={handleEmailChange} />
            </View>
            <View style={styles.loginbox}>
              <TextInput style={styles.inputEmail} placeholder='Senha' placeholderTextColor="#C3C3C3" secureTextEntry={true} onChangeText={handlePasswordChange} />
            </View>
            <View style={styles.loginbox}>
              <TextInput style={styles.inputEmail} placeholder='Confirme a Senha' placeholderTextColor="#C3C3C3" secureTextEntry={true} onChangeText={handlePassword2Change} />
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={handleConfirmation}>
              <Text style={styles.loginButtonText}>Criar Conta</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.linha} />
              <Text style={styles.textWhite}>ou</Text>
              <View style={styles.linha} />
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={styles.gafbutton} onPress={loginGoogle}>
                <Image source={require('../../src/assets/Google.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.gafbutton} onPress={loginApple}>
                <Image source={require('../../src/assets/Apple.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.gafbutton} onPress={loginFacebook}>
                <Image source={require('../../src/assets/Facebook.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',
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

  returnButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    width: 60, // Adjust the width as needed
    height: 60, // Adjust the height as needed
  },

});