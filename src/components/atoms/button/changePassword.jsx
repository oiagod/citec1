import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, updatePassword,  } from "firebase/auth";
import Toast from "react-native-toast-message";
const auth = getAuth();

const ChangePasswordButton = ({ navigation, buttonText, currentPassword, newPassword, confirmPassword,  }) => {
  const handleUpdatePassword = () => {
    
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
   if(!currentPassword || !newPassword || !confirmPassword) {
    Toast.show({
      type: 'error',
      text1: 'Há campos não preenchidos',
      text2: 'Preencha todos os campos',
      visibilityTime: 4000,
    });

    return; //impede a execução do restante do código
   };

   const user = auth.currentUser;

   if (user) {
    if (newPassword === currentPassword) {
        Toast.show({
          type: 'error',
          text1: 'Nova senha igual à senha atual',
          text2: 'A nova senha deve ser diferente da senha atual',
          visibilityTime: 4000,
        });
        return;
    }

    if (newPassword !== confirmPassword) {
        Toast.show({
            type: 'error',
            text1: 'Senhas não coincidem',
            text2: 'A nova senha e a confirmação de senhas deve ser iguais',
            visibilityTime: 4000,
        });
        return;
    }

    //Alterar senha
    updatePassword(user, newPassword)
    .then(() => {
        Toast.show({
            type: 'success',
            text1: 'Senha alterada com sucesso',
            visibilityTime: 4000,
        });
        navigation.navigate("PerfilConfigPage")
    })
    .catch((updatePasswordError) => {
        const updatePasswordErrorCode = updatePasswordError.code;
        const updatePasswordErrorMessage = updatePasswordError.message;
        console.log(updatePasswordErrorMessage);

        if (updatePasswordErrorCode === 'auth/weak-password') {
            // Senha fraca
            Toast.show({
              type: 'error',
              text1: 'Senha fraca',
              text2: 'A senha deve ter pelo menos 6 caracteres',
              visibilityTime: 4000,
            }) 
          } else if (updatePasswordErrorCode === 'auth/wrong-password') {
            Toast.show({
              type: 'error',
              text1: 'Senha atual inválida',
              text2: 'A senha atual fornecida é inválida',
              visibilityTime: 4000,
            })
        }   else {
            // Outro erro não tratado
            Toast.show({
              type: 'error',
              text1: 'Erro ao alterar a senha',
              text2: updatePasswordErrorMessage,
              visibilityTime: 4000,
            });
          }
    });
   } 

  };
  return (
    <TouchableOpacity style={styles.loginbutton} onPress={handleUpdatePassword}>
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

export default ChangePasswordButton;