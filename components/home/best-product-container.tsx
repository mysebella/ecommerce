import { FlatList } from "react-native";
import CardProduct from "../product/card-product";
import Seperator from "../separator";
import PRODUCTS from "@/constants/products";

export default function BestProductContainer() {
  return (
    <>
      <Seperator label="Best Seller" />
      <FlatList
        contentContainerStyle={{ gap: 6 }}
        showsHorizontalScrollIndicator={false}
        data={PRODUCTS}
        horizontal
        renderItem={(item) => <CardProduct {...item.item} />}
      />
    </>
  );
}
