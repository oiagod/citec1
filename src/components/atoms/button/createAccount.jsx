import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { db } from "../../../Services/firebaseConfig";
import Toast from "react-native-toast-message";

const auth = getAuth();

const CreateAccountButton = ({ navigation, buttonText = 'Login', username, email, password, password2 }) => {
  const handleCreateAccount = () => {

    if (!username) {
      Toast.show({
        type: 'error',
        text1: 'Nome de usuário inválido',
        text2: 'Porfavor, insira um nome de usuário válido',
        visibilityTime: 4000,
      });
      return; //esse return impede a execução do restante do código
    }

    if (password !== password2) {
      Toast.show({
        type: 'error',
        text1: 'Senhas não coincidem',
        text2: 'A nova senha e a confirmação de senhas deve ser iguais',
        visibilityTime: 4000,
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userDocRef = doc(db, 'users', user.uid);

        return setDoc(userDocRef, {
          Name: username,
          // Outros campos que você deseja armazenar
        });
      })
      .then(() => {
        console.log("Usuário criado com sucesso");
        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);

        Toast.show({
          type: 'success',
          text1: 'Usuário criado com sucesso',
          visibilityTime: 4000,
        });

        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário ou documento no Firestore:", error.message);

        Toast.show({
          type: 'error',
          text1: 'Erro ao criar a conta',
          text2: error.message,
          visibilityTime: 4000,
        });
      });
  };

  return (
    <TouchableOpacity style={styles.loginbutton} onPress={handleCreateAccount}>
      <Text style={styles.loginButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

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
});

export default CreateAccountButton;
