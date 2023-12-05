import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { db } from "../../../Services/firebaseConfig";

const auth = getAuth();

const CreateAccountButton = ({ navigation, buttonText = 'Login', username, email, password }) => {
  const handleCreateAccount = () => {
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

        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário ou documento no Firestore:", error.message);
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
