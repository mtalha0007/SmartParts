import React from 'react';
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

function AppRouter() {
  return (
    <BrowserRouter>
        <Header/>
          <PrimarySearchAppBar />
       <CategoryHeader/>
       <FixedHeader /> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FeedBack/>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
