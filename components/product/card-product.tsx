import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import formatNumber from "@/utils/formatNumber";
import product from "@/types/product";

export default function CardProduct(product: product) {
  return (
    <View className="border border-gray-100 w-[170px] mb-1 bg-white overflow-hidden rounded-lg">
      <Image
        source={{
          uri: product.image,
        }}
        resizeMode="contain"
        className="w-36 rounded-lg m-auto my-2 h-32 bg-cover bg-center"
      />
      <View className="p-2">
        <Text className="font-outfit-regular text-primary/80 mb-1">
          {product.brand}
        </Text>
        <Text
          numberOfLines={1}
          className=" font-outfit-medium text-black text-base leading-5"
        >
          {product.name}
        </Text>
        <View className=" bg-gray-50 rounded-lg mt-2 mb-1 flex-row justify-between items-center">
          <Text
            className="font-outfit-medium text-black ml-4 text-base"
            numberOfLines={1}
          >
            {formatNumber(product.price)}
          </Text>
          <TouchableOpacity>
            <View className="bg-black/80 rounded-lg p-[6px]">
              <Feather name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
