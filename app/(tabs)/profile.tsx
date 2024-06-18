import AppContainer from "@/components/app-container";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import COLOR from "@/constants/color";
import Navbar from "@/components/profile/navbar";

export default function Page() {
  return (
    <AppContainer>
      <Navbar />
      <View className="flex-row justify-evenly my-4">
        <TouchableOpacity>
          <View className="items-center">
            <Ionicons name="receipt" size={24} color={COLOR.black} />
            <Text>Riwayat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="items-center">
            <Feather name="package" size={24} color={COLOR.black} />
            <Text>Lacak paket</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className=" items-center">
            <Ionicons name="location-sharp" size={24} color={COLOR.black} />
            <Text>Alamat</Text>
          </View>
        </TouchableOpacity>
      </View>
    </AppContainer>
  );
}
