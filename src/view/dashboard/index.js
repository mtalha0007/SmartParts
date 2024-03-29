import { useEffect } from "react";
import SlideSection from "../../layout/SlideSection/index";
import CarCard from "../../layout/CarCards/index";
import CategoriesSection from "../../layout/CategoriesSection/index";
import CarBanner from "../../components/CarBanner/CarBanner";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import AdBanner1 from "../../components/AdBanner/AdBanner1";
import AdBanner2 from "../../components/AdBanner/AdBanner2";
import ProductReview from "../../components/ProductReview/ProductReview";
import DoubleSLider from "../../components/DoubleSlider/DoubleSlider";
import EditorReview from "../../components/EditorReview/EditorReview";
import productServices from "../../services/productServices";
import { useState } from "react";
import { logDOM } from "@testing-library/react";
import DoubleSlider from "../../components/DoubleSlider/DoubleSlider";

export default function App() {
  let cardData;
  const [cardDetails, setCardDetails] = useState([]);
  const getProductData = async () => {
    try {
      const productData = await productServices.getProductData();
      setCardDetails(productData?.data?.result);
 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <SlideSection />
      <CarCard />
      <CategoriesSection data={cardDetails} />
      <CarBanner />
      <PopularProducts data={cardDetails}  />
      <AdBanner1 />
      <ProductReview />
      <AdBanner2 />
      <DoubleSlider data={cardDetails} />
      <EditorReview />
    </>
  );
}
