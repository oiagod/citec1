import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";

export const UserProfile = ({ navigation }) => {

    const returnPage = () => {
      navigation.goBack();
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#191919'}}>
            <TouchableOpacity style={styles.returnButton} onPress={returnPage}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize:50, color: '#C3C3C3' }}>‹</Text>
                </View>
            </TouchableOpacity>
            <SafeAreaView>
              <View style={styles.profileImage}>
                <Image source={require('../../Assets/user-icon.jpg')}/>
                <View style={styles.linha}/>
              </View>
              <StatusBar />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    justifyContent: 'center',
  },

  linha: {
    backgroundColor: '#004222',
    height: 2,
    width: '80%',
    marginTop: 15,
    marginHorizontal: 30,
  },

  textWhite: {
    color: '#C3C3C3',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },

  returnButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 60, // Adjust the width as needed
    height: 60, // Adjust the height as needed
  },

  profileImage: {
    alignItems: 'center',
    marginTop: 100,
  },
});