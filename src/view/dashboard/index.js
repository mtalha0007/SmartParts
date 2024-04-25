import { useEffect,useState } from "react";
import SlideSection from "../../layout/SlideSection/index";
import CarCard from "../../layout/CarCards/index";
import CategoriesSection from "../../layout/CategoriesSection/index";
import CarBanner from "../../components/CarBanner/CarBanner";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import AdBanner1 from "../../components/AdBanner/AdBanner1";
import AdBanner2 from "../../components/AdBanner/AdBanner2";
import ProductReview from "../../components/ProductReview/ProductReview";
import EditorReview from "../../components/EditorReview/EditorReview";
import productServices from "../../services/productServices";
import DoubleSlider from "../../components/DoubleSlider/DoubleSlider";

export default function App({data }) {

  return (
    <>
      <SlideSection />
      <CarCard />
      <CategoriesSection data={data}  />
      <CarBanner />
      <PopularProducts data={data}  />
      <AdBanner1 />
      <ProductReview />
      <AdBanner2 />
      <DoubleSlider data={data}  />
      <EditorReview />
    </>
  );
}
