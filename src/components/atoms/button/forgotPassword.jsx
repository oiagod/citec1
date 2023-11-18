import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ForgotPassword = ({ navigation }) => {
    const forgotPassword = () => {
        navigation.navigate("ForgotPassword")
      };

    return ( 
    <TouchableOpacity onPress={forgotPassword} style={ styles.forgotText }>
        <Text style={ styles.textWhite}>Esqueceu?</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    textWhite: {
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
      },
    
    forgotText: {
        justifyContent: 'center',
        paddingRight: 10,
    }
});

export default ForgotPassword;