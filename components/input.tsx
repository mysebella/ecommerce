import { Text, TextInput, View } from "react-native";

type props = {
  label: string;
  placeholder: string;
};

export default function Input(prop: props) {
  return (
    <View className="mb-4">
      <Text className="font-outfit-medium text-black text-base mb-2 ml-1">
        {prop.label}
      </Text>
      <TextInput
        placeholder={prop.placeholder}
        className="bg-gray-100 text-base p-4 rounded-lg font-outfit-medium"
      />
    </View>
  );
}
