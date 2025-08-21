import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.123344</Text>
      <View>
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
          跳转
        </TouchableOpacity>
      </View>
    </View>
  );
}
