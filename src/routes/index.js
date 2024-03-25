import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../layout/Login/index"
function index() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path={"/account"} element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default index