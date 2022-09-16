import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import { useEffect, useState } from 'react';
import GameScreeen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(confirmedNumber) {
    setPickedNumber(confirmedNumber)
    setIsGameOver(false)
  }
  
  function gameOverHandler() {
    setIsGameOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />

  if(pickedNumber) {
    screen = <GameScreeen userNumber={pickedNumber} onGameOver={gameOverHandler}/>
  }

  if(isGameOver && pickedNumber) {
    screen = <GameOverScreen />
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
