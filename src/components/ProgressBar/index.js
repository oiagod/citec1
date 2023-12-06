import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import { Ionicons } from "@expo/vector-icons";

export default function ProgressBar({ bgcolor, completed }) {
    return (

        <View style={styles.container}>

            <View style={styles.logo}>
                <Text style={styles.label}>{`MY VÉLO`}</Text>
                <Ionicons name="flash-outline" size={25} color="#FFFF" />
            </View>
            <View style={styles.filler}>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 44,
        width: '80%',
        backgroundColor: "#2E2B2E",
        borderRadius: 50,
        margin: 50,
        flexDirection: 'column',

    }, logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    }, filler: {
        marginTop: -27,
        height: 44,
        width: `60%`,
        backgroundColor: '#023A20',
        borderRadius: 50,
    }, label: {
        color: 'white',
        fontWeight: 'bold'
    },
})