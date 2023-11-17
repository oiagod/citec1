import { StyleSheet } from "react-native";

const Separator = () => {
    return (
        <View style={ styles.linha }/>
    )
}

const styles = StyleSheet.create ({
    linha: {
        backgroundColor: '#004222',
        height: 2,
        width: '33%',
        marginHorizontal: 30,
      },
});

export default Separator;