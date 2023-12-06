import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import Header from '../../header/index.js';
import Map from '../../map/index.js';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ styles.container}>
            <Map></Map>
            <Header navigation={navigation}></Header>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada',
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

export default HomeScreen;