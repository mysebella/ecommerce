import { View, Text, TouchableWithoutFeedback } from "react-native";

type Seperator = {
  label: string;
  path?: string;
};

export default function Seperator(seperator: Seperator) {
  return (
    <View className="flex-row items-center justify-between my-4">
      <Text className="font-outfit-medium text-xl text-black">
        {seperator.label}
        <Text className="text-primary-bg font-outfit-bold">.</Text>
      </Text>
      {seperator.path != null ? (
        <TouchableWithoutFeedback>
          <Text className="font-outfit-regular text-base text-black/50">
            Lihat lainya
          </Text>
        </TouchableWithoutFeedback>
      ) : (
        ""
      )}
    </View>
  );
}
