import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const FacebookIcon = () => {

  const facebookLogin = () => {
    console.log("Login using facebook");

  };

  return (
    <TouchableOpacity style={ styles.gafbutton } onPress={facebookLogin}>
      <Image source={require('../../../assets/Facebook.png')} />
    </TouchableOpacity>
  )
        
}

const styles = StyleSheet.create ({
    gafbutton: {
        marginHorizontal: 20,
    },
})

export default FacebookIcon;