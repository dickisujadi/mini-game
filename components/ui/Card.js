import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        elevation: 4, // add shadow on android
        shadowColor: 'black', // add shadow on ios
        shadowOffset: { width: 0, height: 2 }, // add shadow on ios
        shadowRadius: 6, // add shadow on ios
        shadowOpacity: 0.25, // add shadow on ios
    }
})