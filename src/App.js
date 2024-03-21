import Header from "./layout/Header/index";
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import SlideSection from "./layout/SlideSection/index";
import CarCard from "./layout/CarCards/index";
import CategoriesSection from "./layout/CategoriesSection/index";
import CarBanner from "./components/CarBanner/CarBanner";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import AdBanner1 from "./components/AdBanner/AdBanner1";
import AdBanner2 from "./components/AdBanner/AdBanner2";
import ProductReview from "./components/ProductReview/ProductReview";
import DoubleSLider from "./components/DoubleSlider/DoubleSlider";
import FeedBack from "./components/FeedBack/FeedBack"
import EditorReview from "./components/EditorReview/EditorReview";
export default function App() {
  return (
    <>
      <Header />
      <PrimarySearchAppBar />
      <SlideSection />
      <CarCard />
      <CategoriesSection />
      <CarBanner />
      <PopularProducts />
      <AdBanner1 />
      <ProductReview />
      <AdBanner2 />
      <DoubleSLider/>
      <EditorReview/>
      <FeedBack/>
    </>
  );
}
