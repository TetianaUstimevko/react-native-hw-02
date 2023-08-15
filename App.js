import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";

const backImage = require("./assets/img/Photo_BG.png");

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);

  const changeScreen = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={backImage} style={styles.backImg}>
          {activeScreen === 0 ? (
            <LoginScreen changeScreen={changeScreen} />
          ) : (
            <RegistrationScreen changeScreen={changeScreen} />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  backImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});