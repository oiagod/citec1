import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const AppleIcon = () => {

  const loginApple = () => {
    console.log("Login using apple");

  };

  return (
    <TouchableOpacity style={ styles.gafbutton } onPress={loginApple}>
      <Image source={require('../../../assets/Apple.png')} />
    </TouchableOpacity>
  )
        
}

const styles = StyleSheet.create ({
    gafbutton: {
        marginHorizontal: 20,
    },
})

export default AppleIcon;