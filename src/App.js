
import Header from "./layout/Header/index"
import PrimarySearchAppBar from "./components/Navbar/Navbar"
import SlideSection from "./layout/SlideSection/index"
import CarCard from "./layout/CarCards/index"
import CategoriesSection from "./layout/CategoriesSection/index"
import CarBanner from "./components/CarBanner/CarBanner"
export default function App() {
  
return(
  <>
  <Header />
<PrimarySearchAppBar />
<SlideSection />
<CarCard />
<CategoriesSection />
<CarBanner />
  </>
)
}