import AppContainer from "@/components/app-container";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import ProductContainer from "@/components/product/product-container";
import ButtonBack from "@/components/button/button-back";
import { FontAwesome } from "@expo/vector-icons";
import COLOR from "@/constants/color";

export default function Page() {
  return (
    <AppContainer>
      <View className="flex-row items-center my-2">
        <ButtonBack />
        <TextInput
          className="p-4 px-6 font-outfit-medium ml-2 text-base bg-gray-100 w-[81%] rounded-full"
          placeholder="Masukan Nama Barang"
        />
      </View>
      <View>
        <View>
          <ListItemHistory name="Indomie rasa karie" />
          <ListItemHistory name="Baju anak untuk lebaran" />
          <ListItemHistory name="Box indomie" />
        </View>
        <TouchableOpacity>
          <View className="flex-row items-center gap-x-2 my-4 justify-center">
            <FontAwesome name="trash-o" size={20} color={COLOR.danger} />
            <Text className="text-base font-outfit-medium text-danger/90">
              Hapus Riwayat Pencarian
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ProductContainer label="Mungkin yang bikin kamu suka" />
    </AppContainer>
  );
}

function ListItemHistory({ name }: { name: string }) {
  return (
    <View className="flex-row py-2 px-1 items-center justify-between">
      <TouchableOpacity className="flex-1">
        <Text className="font-roboto-regular text-base text-black opacity-80">
          {name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="x" size={20} color="rgba(0,0,0,.5)" />
      </TouchableOpacity>
    </View>
  );
}
