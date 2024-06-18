import AppContainer from "@/components/app-container";
import Button from "@/components/button/button";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
const onboardingImage = require("@/assets/image/onboarding-image.png");

export default function Index() {
  return (
    <AppContainer>
      <View style={{ paddingHorizontal: 16 }} className="h-screen">
        <View className="flex justify-center h-[600px] items-center">
          <Image source={onboardingImage} className=" w-64 h-64" />
          <View className="p-4">
            <Text className="text-center text-xl font-outfit-bold text-black">
              Belanja mudah tanpa keluar rumah!
            </Text>
            <Text className="text-center text-base text-black/50 font-outfit-medium">
              Pesan semua dengan sekali klik dan barang akan dapat ke rumahmu
            </Text>
          </View>
        </View>
      </View>
      <View className="absolute bottom-0 w-full">
        <Button
          variant="secondary"
          content="Mulai Sekarang"
          callback={() => router.push("sign-in")}
        />
        <Button
          variant="primary"
          content="Daftar Akun Baru"
          callback={() => router.push("sign-up")}
        />
      </View>
    </AppContainer>
  );
}
