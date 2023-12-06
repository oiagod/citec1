
import {StyleSheet, Text, View} from 'react-native';


import Header from '../../components/Header'
import Map from '../../components/Map';

export default function Home() {
    return (
        <View style={styles.container}>
            <Map></Map>
            <Header></Header>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada',
    }
});