import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreeen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null)

  function pickedNumberHandler(confirmedNumber) {
    setPickedNumber(confirmedNumber)
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  if(pickedNumber) {
    screen = <GameScreeen userNumber={pickedNumber}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground 
        source={require('./assets/background.png')} 
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer : {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
