import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignInScreen = () => {
  const router = useRouter();
  return (
    <View>
      <KeyboardAvoidingView>
        <Text>11SignInScreen</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
          跳转
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;
