import Header from "./layout/Header/index";
import PrimarySearchAppBar from "./components/Navbar/Navbar";
import SlideSection from "./layout/SlideSection/index";
import CarCard from "./layout/CarCards/index";
import CategoriesSection from "./layout/CategoriesSection/index";
import CarBanner from "./components/CarBanner/CarBanner";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import AdBanner from "./components/AdBanner/AdBanner";
import ProductReview from "./components/ProductReview/ProductReview";
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
      <AdBanner />
      <ProductReview />
    </>
  );
}
