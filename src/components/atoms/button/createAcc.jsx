import { Text, View,TouchableOpacity, StyleSheet } from "react-native";

const CreateAccount = ({ navigation }) => {
    const createAccount = () => {
        navigation.navigate("CreateAccount")
      };

    return ( 
    <TouchableOpacity onPress={createAccount} style={ styles.createText }>
        <Text style={ styles.textWhite}>Criar conta</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    textWhite: {
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
      },
    
    createText: {
        alignSelf: 'flex-end',
        paddingRight: 30,
        marginBottom: 20,
    }
});

export default CreateAccount;