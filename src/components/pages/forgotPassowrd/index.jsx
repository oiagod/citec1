import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Image, StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity, Text, Modal, TextInput } from 'react-native';

import InputEmail from '../../atoms/input/inputEmail';
import LoginButton from '../../atoms/button/login';
import ReturnButton from '../../atoms/button/returnButton';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [verificationCode, setVerificationCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleEmailCheck = () => {
        // Generate a random 6-digit number for verification
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        setGeneratedCode(randomCode.toString());

        // Send an email to the provided email address with the verification code
        // You can use a library like 'react-native-mail' or an API to send emails
        // For simplicity, let's log the verification code to the console
        console.log('Verification Code:', randomCode);

        // Show the modal for code validation
        setModalVisible(true);
    }

    const handleCodeValidation = () => {
        // Check if the entered code matches the generated code
        if (verificationCode === generatedCode) {
            // Code is valid, you can perform further actions here
            console.log('Code is valid');

            // Close the modal
            setModalVisible(false);
        } else {
            // Code is invalid, you can handle this case accordingly
            console.log('Code is invalid');
            // Optionally, show an error message to the user
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.KeyboardAvoidingContainer}
            >
                <View style={styles.returnButton}>
                    <ReturnButton navigation={navigation} />
                </View>
                <View style={styles.formBox}>
                    <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
                    <InputEmail setEmail={handleEmailChange} />
                    <TouchableOpacity style={styles.recoverbutton} onPress={handleEmailCheck}>
                        <Text style={styles.recoverButtonText}>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(false) }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={{ position: 'relative', alignSelf: 'flex-start', top: -20 }} onPress={() => { setModalVisible(false); }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#C3C3C3', fontFamily: 'Montserrat-Medium', }}>X</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Coloque o codigo de verificação:</Text>
                            <TextInput style={styles.inputCode} placeholder='                                         ' keyboardType="numeric" onChangeText={(text) => { setVerificationCode(text) }} />
                            <TouchableOpacity style={{ position: 'relative', width: 100, backgroundColor: '#004222', borderRadius: 20, height: 50, alignItems: 'center', justifyContent: 'center' }} title="Validate" onPress={handleCodeValidation}>
                                <Text style={styles.textWhite}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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

    recoverbutton: {
        width: '90%',
        backgroundColor: '#004222',
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        height: 50,
    },

    recoverButtonText: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        backgroundColor: '#1e2817',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },

    modalText: {
        fontSize: 20,
        color: '#C3C3C3',
        marginBottom: 15,
        fontFamily: 'Montserrat-Medium',
    },

    inputCode: {
        paddingLeft: 10,
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
        width: '100%',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#C3C3C3',
    },

    textWhite: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
    },

})

export default ForgotPassword;