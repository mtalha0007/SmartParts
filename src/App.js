import { useForm } from "react-hook-form"
import Header from "./layout/Header/index"
import PrimarySearchAppBar from "./components/Navbar/Navbar"
import SlideSection from "./layout/SlideSection/index"


export default function App() {
  
return(
  <>
  <Header />
<PrimarySearchAppBar />
<SlideSection />
  </>
)
}