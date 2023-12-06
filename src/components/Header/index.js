import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import ProgressBar from '../ProgressBar'



const ampliarFoto = function () {
    
};

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="menu" size={40} color="#ffff"></Feather>
                </TouchableOpacity>
                <View style={styles.progressBar}>
                    <ProgressBar bgcolor="#6a1b9a" completed="60" />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonUser} onPress={ampliarFoto}>
                        <Image style={styles.perfil} source={require('../../img/teste.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 0,
        paddingStart: 18,
        paddingEnd: 18,
        paddingBottom: 12,
        width: '100%',
        position: 'absolute'
    }, content: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingEnd: 18,
    },  progressBar:{
        justifyContent: 'center',
        alignItems: 'center'
    },buttonUser: {

    }, perfil: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,

    },
})