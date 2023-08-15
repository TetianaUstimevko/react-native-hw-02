import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

const TextInput = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
});

export default TextInput;