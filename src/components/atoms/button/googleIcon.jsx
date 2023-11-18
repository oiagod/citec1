import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const GoogleIcon = () => {

  const loginGoogle = () => {
    console.log("Login using google");

  };

  return (
    <TouchableOpacity style={ styles.gafbutton } onPress={loginGoogle}>
      <Image source={require('../../../assets/Google.png')} />
    </TouchableOpacity>
  )
        
}

const styles = StyleSheet.create ({
    gafbutton: {
        marginHorizontal: 20,
    },
})

export default GoogleIcon;