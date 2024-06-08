import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children?: React.ReactNode | React.ReactNode[]
}

export default function AppContainer({ children }: Props) {
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}
