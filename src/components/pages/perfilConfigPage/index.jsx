import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Modal } from "react-native";
import { useProfilePhoto } from '../../atoms/context/profilePhoto';

import ReturnButton from "../../atoms/button/returnButton";

const PerfilConfigPage = ({ navigation }) => {

    const { profilePhoto, updateProfilePhoto } = useProfilePhoto();

    const [afModalVisible, setafModalVisible] = useState(false);
    const [asModalVisible, setasModalVisible] = useState(false);
    const [aeModalVisible, setaeModalVisible] = useState(false);
    const [sModalVisible, setsModalVisible] = useState(false);

    const handlePhotoChange = (newPhoto) => {
        updateProfilePhoto(newPhoto);
        closeafModal();
    };

    const openafModal = () => {
        setafModalVisible(true);
    };

    const closeafModal = () => {
        setafModalVisible(false);
    };

    const openasModal = () => {
        setasModalVisible(true);
    };

    const closeasModal = () => {
        setasModalVisible(false);
    };

    const openaeModal = () => {
        setaeModalVisible(true);
    };

    const closeaeModal = () => {
        setaeModalVisible(false);
    };

    const opensModal = () => {
        setsModalVisible(true);
    };

    const closesModal = () => {
        setsModalVisible(false);
    };

    const sairConta = () => {
        navigation.navigate("Login")
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.returnButton}>
                <ReturnButton navigation={navigation} />
            </View>
            <View style={styles.header2}>
                <Image style={{ borderRadius: 200, height: 58, width: 58 }} source={profilePhoto} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.textWhite}>Nome do usuário</Text>
                </View>
            </View>
            <View style={{ top: 40 }}>
                <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start' }} onPress={openafModal} activeOpacity={0.7}>
                    <Text style={styles.textwhite2}>Alterar foto de perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start' }} onPress={openasModal} activeOpacity={0.7}>
                    <Text style={styles.textwhite2}>Alterar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start' }} onPress={openaeModal} activeOpacity={0.7}>
                    <Text style={styles.textwhite2}>Alterar email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-start' }} onPress={opensModal} activeOpacity={0.7}>
                    <Text style={styles.textwhite2}>Sair</Text>
                </TouchableOpacity>

                {/* Modal de Alterar foto de perfil */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={afModalVisible}
                    onRequestClose={closeafModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#191919',
                                width: '80%',
                                height: '80%',
                                borderRadius: 60,
                                padding: '20',

                            }}
                        >
                            <TouchableOpacity onPress={closeafModal}>
                                <Text style={styles.interno} >X</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center',  top: '20%'}}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handlePhotoChange(require('../../../assets/user-icon2.jpg'))}>
                                    <Image style={{ borderRadius: 200, height: 58, width: 58 }} source={require('../../../assets/user-icon2.jpg')} />
                                <Text style={styles.textWhite}>Alterar para Foto 1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignItems: 'center', top: '30%' }} onPress={() => handlePhotoChange(require('../../../assets/user-icon.jpg'))}>
                                    <Image style={{ borderRadius: 200, height: 58, width: 58 }} source={require('../../../assets/user-icon.jpg')} />
                                <Text style={styles.textWhite}>Alterar para Foto 2</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Modal de Alterar senha */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={asModalVisible}
                    onRequestClose={closeasModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#191919',
                                width: '80%',
                                height: '80%',
                                borderRadius: 60,
                                padding: '20',
                            }}
                        >
                            <TouchableOpacity onPress={closeasModal}>
                                <Text style={styles.interno}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Modal de Alterar email */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={aeModalVisible}
                    onRequestClose={closeaeModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#191919',
                                width: '80%',
                                height: '80%',
                                borderRadius: 60,
                                padding: '20',
                            }}
                        >
                            <TouchableOpacity onPress={closeaeModal}>
                                <Text style={styles.interno}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Modal de Sair */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={sModalVisible}
                    onRequestClose={closesModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#191919',
                                width: '80%',
                                height: '40%',
                                borderRadius: 60,
                                padding: '20',
                            }}
                        >
                            <TouchableOpacity onPress={closesModal}>
                                <Text style={styles.interno}>X</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', top: '20%' }}>
                                <Text style={{ color: '#C3C3C3', fontFamily: 'Montserrat-Regular', fontSize: 20 }}>Tem certeza que deseja sair?</Text>
                                <Text style={{ margin: 30, color: '#C3C3C3', fontFamily: 'Montserrat-Regular', fontSize: 16 }}>Isto irá te deslogar da conta</Text>
                            </View>
                            <View style={{ top: '30%' }}>
                                <TouchableOpacity onPress={sairConta} style={{
                                    width: '50%',
                                    backgroundColor: '#004222',
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    height: 50,
                                }}>
                                    <Text style={{
                                        alignSelf: 'center',
                                        color: '#C3C3C3',
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-SemiBold',
                                    }}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
}

styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#191919',
        paddingHorizontal: 10,

    },

    returnButton: {
        top: 80
    },

    header: {
        justifyContent: "flex-start",
        alignItems: "center",
    },

    separator: {
        top: 20,
        marginHorizontal: 30,
    },

    textWhite: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        paddingTop: 10,
    },

    perfilText: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        paddingTop: 10,
        textDecorationLine: 'underline',
    },

    paragraph: {
        //position: 'absolute',
        margin: 10,
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'left',
        color: '#C3C3C3',
    },

    interno: {
        top: 35,
        left: 25,
        width: 30, // Adjust the width as needed
        height: 30, // Adjust the height as needed
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#C3C3C3',
        paddingLeft: 8,
        paddingTop: 2,

    },

    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },

    text_config: {
        marginBottom: 10,
        alignSelf: 'flex-start',
    },

    header2: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
    },

    textwhite2: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 10,
    },
});

export default PerfilConfigPage;