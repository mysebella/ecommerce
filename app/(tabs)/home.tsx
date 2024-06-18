import AppContainer from "@/components/app-container";
import Hero from "@/components/home/hero";
import Category from "@/components/home/category";
import Navbar from "@/components/home/navbar";
import ProductContainer from "@/components/product/product-container";
import BestProductContainer from "@/components/home/best-product-container";

export default function Page() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Category />
      <BestProductContainer />
      <ProductContainer label="Product Berkualitas" />
    </AppContainer>
  );
}
