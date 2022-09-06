import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4, // add shadow on android
        shadowColor: 'black', // add shadow on ios
        shadowOffset: { width: 0, height: 2 }, // add shadow on ios
        shadowRadius: 6, // add shadow on ios
        shadowOpacity: 0.25, // add shadow on ios
        // justifyContent: 'center'
    }
})