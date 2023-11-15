import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';


export const HomeScreen = ({ navigation }) => {

    const returnPage = () => {
        navigation.goBack();
    }

    return (
        <View style={ styles.container}>
            <TouchableOpacity style={styles.returnButton} onPress={returnPage}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 50, color: '#C3C3C3' }}>‹</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.profileImage} onPress={() => { navigation.navigate("UserProfile") }}>
                <Image style={{  width: 25, height: 25,}} source={require('../../Assets/user-icon.jpg')}/>
            </TouchableOpacity>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#191919',
        paddingHorizontal: 10,
    },

    returnButton: {
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        width: 60, // Adjust the width as needed
        height: 60, // Adjust the height as needed
    },

    profileImage: {
        margin: 0,
        padding: 0,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
       },
});