import { Text, View } from "react-native";
import CardProduct from "./card-product";
import Seperator from "../separator";
import PRODUCTS from "@/constants/products";

export default function ProductContainer({ label }: { label: string }) {
  return (
    <>
      <Seperator label={label} />
      <View className="flex-row justify-evenly flex-wrap">
        {PRODUCTS.map((product, index) => {
          return <CardProduct key={index} {...product} />;
        })}
      </View>
    </>
  );
}
