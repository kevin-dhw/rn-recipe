import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View>
      <KeyboardAvoidingView>
        <Text style={styles.title}>SignUpScreen</Text>
        <View style={styles.flexContainer}>
          <View>1</View>
          <View>2</View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "red",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default SignUpScreen;
