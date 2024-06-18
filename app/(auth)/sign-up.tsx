import AppContainer from "@/components/app-container";
import Button from "@/components/button/button";
import ButtonBack from "@/components/button/button-back";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Input from "@/components/input";

export default function Singup() {
  return (
    <AppContainer>
      <ButtonBack />
      <View className="mt-6 mb-6">
        <Text className="text-4xl font-outfit-bold text-black">Register</Text>
        <Text className="text-xl text-black/50 font-outfit-medium mb-4 my-4">
          Daftar, dan mulai manjakan dirimu dengan fitur yang kami sediakan
        </Text>
        <Input label="Nama Kamu" placeholder="Masukan Nama Kamu" />
        <Input label="Email" placeholder="Masukan email" />
        <Input label="Password" placeholder="Masukan password" />
        <View className="flex-row gap-3">
          <Ionicons
            name="alert-circle"
            size={24}
            className="text-black/70"
            color={"#D04848"}
          />
          <Text className="font-outfit-medium text-black/50 mb-4">
            Dengan mendaftarkan diri menandakan anda setuju dengan peraturan
            kami
          </Text>
        </View>
      </View>
      <Button
        variant="secondary"
        content="Masuk"
        callback={() => router.push("home")}
      />
    </AppContainer>
  );
}
