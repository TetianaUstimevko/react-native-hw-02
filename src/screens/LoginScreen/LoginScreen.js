import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import TextInput from "../../components/TextInput";

const LoginScreen = ({ changeScreen }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleMail = (text) => {
    setMail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const login = () => {
    if (!mail || !password) {
      Alert.alert("Error", "Please enter all data");
      return;
    }
    console.log(`Email: ${mail}, Password: ${password}`);
  };

  const showPassword = () => {
    alert(`Your password is: ${password}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Email address"
          value={mail}
          onChangeText={handleMail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePassword}
        />

        <TouchableOpacity style={styles.passwShow} onPress={showPassword}>
          <Text style={styles.passwShowText}>Show</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => changeScreen(1)}
        >
          <Text style={styles.registerLinkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    marginTop: -34,
  },
  loginButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  registerLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  registerLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default LoginScreen;