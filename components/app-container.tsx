import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export default function AppContainer({ children }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
