import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

    function pressHandler() {
        console.log('pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={ ({pressed}) => pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer } 
                onPress={pressHandler} 
                android_ripple={{ color: '#f4429b' }}
            >
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>)
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: '#af0a5c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color:'#fee9f3',
        textAlign: 'center'
    },
    pressed : {
        opacity: 0.75
    }
})