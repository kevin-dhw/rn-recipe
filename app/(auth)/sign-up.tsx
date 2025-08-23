import Selected from "@/components/common/selected";
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignUpScreen = () => {
  const router = useRouter();
  return (
    <View>
      <KeyboardAvoidingView>
        <Text style={styles.title}>SignUpScreen</Text>
        <View style={styles.flexContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log(23344);
              router.push("/(auth)/sign-in");
            }}
          >
            <View>1</View>
          </TouchableOpacity>
          <View>2</View>
        </View>
      </KeyboardAvoidingView>
      <Selected></Selected>
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
