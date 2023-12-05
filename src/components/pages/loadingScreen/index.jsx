// LoadingScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/Logo_Loading.png')} style={ styles.logo}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
    paddingHorizontal: 10,
  },
});

export default LoadingScreen;