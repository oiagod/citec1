import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar, Modal } from 'react-native';


export const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [verificationCode, setVerificationCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');


    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const returnPage = () => {
        navigation.goBack();
    }

    const handleEmailCheck = () => {
        // Generate a random 6-digit number for verification
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        setGeneratedCode(randomCode.toString());

        // Send an email to the provided email address with the verification code
        // You can use a library like 'react-native-mail' or an API to send emails
        // For simplicity, let's log the verification code to the console
        console.log('Verification Code:', generatedCode);

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
                    <View style={{ alignItems: 'center', position: 'absolute' }}>
                        <View style={styles.loginbox}>
                            <TextInput style={styles.inputEmail} placeholder='Email ' placeholderTextColor="#C3C3C3" keyboardType='email-address' onChangeText={handleEmailChange} />
                        </View>
                        <TouchableOpacity style={styles.recoverbutton} onPress={handleEmailCheck}>
                            <Text style={styles.recoverButtonText}>Recuperar Senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(false) }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ position: 'relative', alignSelf: 'flex-start', top: -20 }} onPress={() => { setModalVisible(false); }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, color: '#C3C3C3', fontFamily: 'Montserrat-Medium', }}>X</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Coloque o codigo de verificação:</Text>
                        <TextInput style={styles.inputCode} placeholder='                                         ' keyboardType="numeric" onChangeText={(text) => {setVerificationCode(text)}} />
                        <TouchableOpacity style={{position: 'relative', width: 100, backgroundColor: '#004222', borderRadius: 20, height: 50, alignItems: 'center', justifyContent: 'center'}} title="Validate" onPress={handleCodeValidation}>
                            <Text style={styles.textWhite}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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

    loginbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: '30%',
        borderRadius: 20,
        height: 50,
        backgroundColor: '#1e2817',
        // O correto seria colocar a cor #43AF00 e uma opacidade de 0.1, mas sem alterar a opacidade da letra interna
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

    logo: {
        marginBottom: 60,
        alignItems: 'center',
        position: 'absolute',
        top: -250
    },

    returnButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        width: 60, // Adjust the width as needed
        height: 60, // Adjust the height as needed
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
});