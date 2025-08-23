import { KeyboardAvoidingView, StyleSheet, View } from "react-native";

const Selected = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.topContainer}>
          <View>233</View>
          <View>233</View>
        </View>
        <View style={styles.mainContianer}>233</View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // flexDirection: "row",
  },
  topContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "#bcbbbb",
    opacity: 0.5,
    flex: 1,
  },
  mainContianer: {
    height: 400,
    backgroundColor: "red",
  },
});

export default Selected;
