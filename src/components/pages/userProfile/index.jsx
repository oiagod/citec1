import React, { cloneElement, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";

import ReturnButton from "../../atoms/button/returnButton";
import Separator from "../../atoms/plain/separator";

const UserProfile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.returnButton}>
                <ReturnButton navigation={navigation}/>
            </View>
            <View style={styles.header}>
                <Image source={require('../../../assets/user-icon.jpg')}/>
                
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.textWhite}>Nome do usuário</Text>
            </View>
            <View style={styles.separator}>
                <Separator type='long'/>
            </View>
        </SafeAreaView>
    );
}

styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        backgroundColor: '#191919',
        paddingHorizontal: 10,

      },

    header: {
        justifyContent:"flex-start",
        alignItems: "center",
    },

    returnButton: {
        top: 80
    },

    separator: {
        top: 20,
        marginHorizontal: 30,
    },

    textWhite: {
        color: '#C3C3C3',
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        paddingTop: 10,
      },
    nameContainer: {
        alignItems: "center", 
    },  
})

export default UserProfile;