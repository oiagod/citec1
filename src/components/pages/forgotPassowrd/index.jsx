import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View,  Image,  StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import InputEmail from '../../atoms/input/inputEmail';
import LoginButton from '../../atoms/button/login';
import ReturnButton from '../../atoms/button/returnButton';

const ForgotPassword = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.KeyboardAvoidingContainer}
            >
            <View style={styles.returnButton}>
                <ReturnButton navigation={navigation}/>
            </View>
                <View style={styles.formBox}>
                    <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
                    <InputEmail />
                    <LoginButton buttonText='Recuperar Senha'/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        backgroundColor: '#191919',
        paddingHorizontal: 10,
      },
    
      logo: {
        marginBottom: '25%',
        alignSelf: 'center',
      },

      formBox: {
        alignItems: 'center', 
    },

    KeyboardAvoidingContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    returnButton: {
        top: -80,
    },  
    
})

export default ForgotPassword;