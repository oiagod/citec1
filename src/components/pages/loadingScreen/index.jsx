// LoadingScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';

const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../../assets/Logo_Loading.png')} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#191919',
        paddingHorizontal: 10,
    },
});

export default LoadingScreen;