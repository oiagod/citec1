import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
const auth = getAuth();

const LoginButton = ({ navigation, buttonText = 'Login', email, password }) => {
  const handleLogin = () => {
    
   if(!email || !password) {
    Toast.show({
      type: 'error',
      text1: 'Há campos não preenchidos',
      text2: 'Preencha todos os campos',
      visibilityTime: 4000,
    });

    return; //impede a execução do restante do código
   };

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigation.navigate("HomeScreen")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === "auth/wrong-passowrd" || errorCode === "auth/user-not-found" || errorCode === "auth/invalid-email") {
      Toast.show({
        type: 'error',
        text1: 'Credenciais inválidas',
        text2: 'Verifique seu e-mail e senha e tente novamente',
        visibilityTime: 4000,
      })
    } else {
      console.log(errorMessage);
    }
  });

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