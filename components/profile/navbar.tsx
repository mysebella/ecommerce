import { View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLOR from "@/constants/color";

export default function Navbar() {
  return (
    <View className="py-6 items-center justify-between flex-row">
      <View className="flex-row items-center gap-x-4">
        <Image
          width={60}
          height={60}
          className="rounded-full"
          source={{
            uri: "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
          }}
        />
        <View>
          <Text className="font-outfit-medium text-lg text-black/90">
            Miko Meysa Bima
          </Text>
          <Text className="font-outfit-regular text-md text-black/50">
            mikomeysa14@gmail.com
          </Text>
        </View>
      </View>
      <TouchableOpacity className=" bg-gray-100 w-12 h-12 justify-center items-center rounded-full">
        <FontAwesome name="gear" size={28} color={COLOR.black} />
      </TouchableOpacity>
    </View>
  );
}
