import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function StartGameScreen({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')
    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber> 99) {
            // show alert ...
            Alert.alert(
                'Invalid Number',
                'Input should be a number and beetween 1 - 99',
                [{text: 'Okay', style : 'destructive', onPress: resetInputHandler}]
            )
            return
        }

        onConfirmNumber(chosenNumber)
    }

    return <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <View style={styles.inputContainer}>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    </View>
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    instructionText : {
        color: Colors.accent500,
        fontSize: 24
    },
    inputContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary500,
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
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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