import AppContainer from "@/components/app-container";
import Seperator from "@/components/separator";
import PRODUCTS from "@/constants/products";
import product from "@/types/product";
import formatNumber from "@/utils/formatNumber";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLOR from "@/constants/color";

export default function Page() {
  return (
    <>
      <AppContainer>
        <Seperator label="Keranjang Produk" />
        <View>
          {PRODUCTS.map((product, index) => {
            return <ListItemCart {...product} key={index} />;
          })}
        </View>
      </AppContainer>
      <View className="w-full bg-white border-t border-gray-100 p-4 absolute bottom-0">
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-outfit-medium text-black">Total:</Text>
          <Text className="text-xl font-outfit-medium text-black">
            {formatNumber(200000)}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-sm font-outfit-regular text-black/40 mt">
            Pesan dan dapatkan poin
          </Text>
          <Text className="text-sm font-outfit-regular text-primary/80">
            Ongkir {formatNumber(10000)}
          </Text>
        </View>
        <TouchableOpacity
          className=" bg-primary/90 rounded-xl p-4"
          activeOpacity={0.8}
        >
          <Text className="text-base text-white font-outfit-medium m-auto">
            Proses pembayaran
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function ListItemCart(product: product) {
  return (
    <>
      <View className="overflow-hidden flex-row my-1 rounded-xl">
        <Image
          source={{
            uri: product.image,
          }}
          className="w-24 bg-gray-100 h-28 bg-contain bg-center"
        />
        <View className="py-1 px-2">
          <Text className="font-outfit-regular text-primary/80">
            {product.brand}
          </Text>
          <Text
            numberOfLines={2}
            className="font-outfit-medium text-base text-black"
          >
            {product.name}
          </Text>
          <Text className=" text-black/50 font-outfit-regular text-sm flex-1">
            50pcs
          </Text>
          <View className="flex-row justify-between items-center w-[85%]">
            <Text
              numberOfLines={1}
              className=" text-black font-outfit-medium text-lg"
            >
              {formatNumber(product.price)}
            </Text>
            <View className=" flex-row items-center bg-gray-50 px-2 rounded-full">
              <TouchableOpacity>
                <Text className="text-3xl px-2 text-black">-</Text>
              </TouchableOpacity>
              <Text className=" text-base px-6 font-outfit-medium text-black">
                1
              </Text>
              <TouchableOpacity>
                <Text className="text-xl px-2 text-black">+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className=" bg-gray-50">
              <FontAwesome name="trash-o" size={20} color={COLOR.danger} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginVertical: 16,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,.1)",
          borderStyle: "dashed",
          borderRadius: 0.1,
        }}
      ></View>
    </>
  );
}
