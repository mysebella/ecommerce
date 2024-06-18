import { TouchableWithoutFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ButtonBack() {
  return (
    <TouchableWithoutFeedback onPress={() => router.back()}>
      <View className="p-4 w-14 justify-center items-center h-14 bg-gray-100 rounded-full">
        <AntDesign name="arrowleft" size={24} color="rgba(0,0,0,.8)" />
      </View>
    </TouchableWithoutFeedback>
  );
}
