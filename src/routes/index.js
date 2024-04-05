import React ,{useState ,useEffect} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../layout/Login/index';
import Dashboard from '../view/dashboard/index';
import Header from '../layout/Header';
import PrimarySearchAppBar from '../components/Navbar/Navbar';
import FixedHeader from '../components/FixedHeader/FixedHeader';
import CategoryHeader from "../components/Categories/CategoryHeader"
import Footer from "../layout/Footer/index";
import FeedBack from "../components/FeedBack/FeedBack";
import Cart from '../components/Cart/Cart';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import productServices from '../services/productServices';
import CheckOut from '../components/Checkout/CheckOut';

function AppRouter() {
  const [cardDetails, setCardDetails] = useState([]);
  const getProductData = async () => {
    try {
      const productData = await productServices .getProductData();
      setCardDetails(productData?.data?.result);
 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <BrowserRouter>
        <Header/>
          <PrimarySearchAppBar />
       <CategoryHeader/>
       <FixedHeader /> 
      <Routes>
        <Route path="/" element={<Dashboard data={cardDetails} />} />
        <Route path="/account" element={<Login />} />
        <Route path="/cart" element={<Cart data={cardDetails}/>} />
        <Route path="/product" element={<ProductDetails data={cardDetails} />} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FeedBack/>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
