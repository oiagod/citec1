import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Separator = ({ type }) => {

    const selectedStyle = type === 'long' ? styles.longLine : styles.line;

    return (
        <View style={selectedStyle}/>
    );
};

Separator.propTypes = {
    type: PropTypes.oneOf(['line', 'long']),
};

const styles = StyleSheet.create ({
    line: {
        backgroundColor: '#004222',
        height: 2,
        width: '33%',
        marginHorizontal: 30,
        
      },

    longLine: {
        backgroundColor: '#004222',
        height: 2,
        width: '100%',
    }
});

export default Separator;