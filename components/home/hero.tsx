import { FlatList, View } from "react-native";

export default function Hero() {
  return (
    <View className="my-2">
      <FlatList
        horizontal
        data={["", "", ""]}
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={() => {
          return <View className="w-64 h-44 rounded-xl bg-gray-100"></View>;
        }}
      />
    </View>
  );
}
