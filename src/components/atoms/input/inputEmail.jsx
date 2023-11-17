import { View, TextInput, StyleSheet} from "react-native";

const InputEmail = ({ setEmail }) => {
    const handleEmailChange = (text) => {
        setEmail(text);
      };

    return (
        <View style={ styles.loginbox}>
        <TextInput 
            style={ styles.inputEmail } 
            placeholder='Email' 
            placeholderTextColor="#C3C3C3" 
            keyboardType='email-address' 
            onChangeText={handleEmailChange}
        />
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

      inputEmail: {
        paddingLeft: 10,
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
        width: '100%'
      },
})

export default InputEmail;