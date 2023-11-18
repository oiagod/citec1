import { Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginButton = ({navigation, buttonText = 'Login'}) => {
  const handleLogin = ({ email, password }) => {
    navigation.navigate("HomeScreen")
    console.log("Email: ", email);
    console.log("Password: ", password);
  };
  return (
    <TouchableOpacity style={ styles.loginbutton } onPress={handleLogin}>
      <Text style={ styles.loginButtonText }>{buttonText}</Text>
    </TouchableOpacity>
  )
        
}

const styles = StyleSheet.create ({
    loginbutton: {
        width: '90%',
        backgroundColor: '#004222',
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        height: 50,
      },

      loginButtonText: {
        color: '#C3C3C3',
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold',
      },
})

export default LoginButton;