import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Keyboard, } from 'react-native';

import Separator from '../atoms/plain/separator';
import SimpleText from '../atoms/plain/simpleText';
import GoogleIcon from '../atoms/button/googleIcon';
import AppleIcon from '../atoms/button/appleIcon';
import FacebookIcon from '../atoms/button/facebookIcon';

const LoginFooter = () => {
    const[keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });
    
    return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
    };
    }, []);

    return (
        <SafeAreaView style={ styles.container }>
        <View style={ [styles.footerBox, keyboardVisible && styles.footerBoxHidden] }>
            <Separator />
            <SimpleText />
            <Separator />
        </View>
            <View style={ [styles.iconRow, keyboardVisible && styles.footerBoxHidden] }>
                <GoogleIcon />
                <AppleIcon />
                <FacebookIcon />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        bottom: 60,
    },

      footerBox: {
        flexDirection: 'row', 
    },

    footerBoxHidden: {
        bottom: -260,
    },

    iconRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    iconRowHidden: {
        bottom: -260,
    },
})

export default LoginFooter;