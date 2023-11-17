import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';

import Separator from '../atoms/plain/separator';
import SimpleText from '../atoms/plain/simpleText';



const LoginFooter = () => {
    return (
        <View style={ styles.footerBox}>
            <Separator />
            <SimpleText />
            <Separator />
        </View>
    )
}

const styles = StyleSheet.create ({
      footerBox: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        position: 'absolute',
    },
})

export default LoginFooter;