import { Text, TouchableWithoutFeedback, View } from "react-native";

type variant = "primary" | "secondary";

const variants: Record<variant, { background: string }> = {
  primary: {
    background: "bg-[#16a34a]",
  },
  secondary: {
    background: "bg-[#374151]",
  },
};

type props = {
  variant?: variant;
  content: string;
  callback?: any;
};

export default function Button({
  variant = "primary",
  content,
  callback,
}: props) {
  return (
    <TouchableWithoutFeedback onPress={callback}>
      <View
        className={`rounded-xl mb-4 overflow-hidden ${variants[variant].background}`}
      >
        <View className={`rounded-sm`}>
          <Text
            className={
              "p-4 font-outfit-medium text-base text-center text-white"
            }
          >
            {content}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
