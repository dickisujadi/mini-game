import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad' 
            autoCapitalize="none"
            autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
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
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
        alignContent: 'center'
    },
    buttonContainer : {
        flexDirection: 'row'
    },
    button : {
        // flex: 1
    }
})