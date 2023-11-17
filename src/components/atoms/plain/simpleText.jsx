import { StyleSheet, Text } from "react-native";

const SimpleText = () => {
    return (
        <Text style ={ styles.textWhite }>ou</Text>
    )
}

const styles = StyleSheet.create ({
    textWhite: {
        color: '#C3C3C3',
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
      },
    
});

export default SimpleText;
