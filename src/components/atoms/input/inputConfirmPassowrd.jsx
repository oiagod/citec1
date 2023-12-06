// ConfirmPasswordInput.jsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputConfirmPassowrd = ({ setPassword2, placeholderText }) => {
  const handlePasswordChange = (text) => {
    setPassword2(text);
  };

  return (
    <View style={styles.loginbox}>
      <TextInput
        style={styles.inputPassword}
        placeholder={placeholderText}
        placeholderTextColor="#C3C3C3"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginbox: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    borderRadius: 20,
    height: 50,
    backgroundColor: '#1e2817',
  },

  inputPassword: {
    paddingLeft: 10,
    color: '#C3C3C3',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    width: '70%',
  },
});

export default InputConfirmPassowrd;