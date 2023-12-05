import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const LoginButton = ({ navigation, buttonText = 'Login', email, password }) => {
  const handleLogin = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

    navigation.navigate("HomeScreen")
  };
  return (
    <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
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