import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ReturnButton = ({ navigation }) => {
    const returnPage = () => {
        navigation.goBack();
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={ styles.returnButton} onPress={returnPage}>
                <Text style={styles.arrow}>‹</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        // alignItems: 'center',
    },

    arrow: {
        fontSize: 50,
        color: '#C3C3C3',
    },

    returnButton: {
        position: 'absolute',
        top: -380,
        left: 10,
        width: 60, // Adjust the width as needed
        height: 60, // Adjust the height as needed
      },
});

export default ReturnButton;