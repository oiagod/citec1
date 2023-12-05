import { View, TextInput, StyleSheet} from "react-native";

const InputText = ({ setUsername }) => {
    const handleUsernameChange = (text) => {
        setUsername(text);
      };

    return (
        <View style={ styles.loginbox}>
        <TextInput 
            style={ styles.inputEmail } 
            placeholder='Nome de usuário' 
            placeholderTextColor="#C3C3C3" 
            keyboardType='default' 
            onChangeText={handleUsernameChange}
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

export default InputText;