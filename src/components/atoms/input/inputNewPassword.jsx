import { View, TextInput, StyleSheet} from "react-native";

import  ForgotPassword  from "../button/forgotPasswordButton.jsx";

const InputNewPassword = ({ setPassword3, navigation, showButtons, placeholderText }) => {
    const handlePasswordChange = (text) => {
        setPassword3(text);
      };

    return (
      <View style={ styles.loginbox}>
        <TextInput 
            style={ styles.inputPassword } 
            placeholder={placeholderText}
            placeholderTextColor="#C3C3C3" 
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
        />
        {showButtons && (
          <>
        <ForgotPassword navigation={navigation}/>
          </>
        )}
    </View>
    )
    
}

const styles = StyleSheet.create({
    loginbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 20,
        borderRadius: 20,
        height: 50,
        backgroundColor: '#1e2817',
        // O correto seria colocar a cor #43AF00 e uma opacidade de 0.1, mas sem alterar a opacidade da letra interna
      },

      inputPassword: {
        paddingLeft: 10,
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
        width: '70%'
      },
})

export default InputNewPassword;