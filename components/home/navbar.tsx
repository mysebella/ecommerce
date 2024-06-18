import { Text, TouchableWithoutFeedback, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Navbar() {
  return (
    <View className="h-20 flex-row items-center justify-between">
      <View>
        <Text className="text-sm text-black/70 font-outfit-regular">
          Selamat Datang
        </Text>
        <Text className="text-xl text-black font-outfit-medium">
          Miko Meysa Bima
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={() => router.push("search")}>
        <View className="w-12 h-12 justify-center items-center bg-gray-200 rounded-full">
          <FontAwesome name="search" size={24} color="#212529" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
