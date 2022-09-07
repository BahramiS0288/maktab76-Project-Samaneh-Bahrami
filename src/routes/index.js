import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "../Layout/userLayout/User.layout";
import { Homepage } from "../pages/user/homepage/Homepage";
import  Category from "../pages/user/Category/Category";
import Cart from "../pages/user/cart/Cart"
import { PaymentResault } from "../pages/user/PaymentResault/PaymentResault.page";
import { ProductOverview } from "../pages/user/productOverview/ProductOverview.page";
import { BasketPage } from "../pages/user/basketpage/BasketPage";
import { AdminLayout } from "../Layout/adminLayout/Admin.layout";
import { Inventory } from "../pages/admin/inventory/Inventory.page";
import { Order } from "../pages/admin/order/Order.page";
import { ProductList } from "../pages/admin/productList/ProductList.page";
import Login from './../pages/login/Login'
import Error404 from "../pages/errors/Error404";
import React from "react";
import CategoryDetails from "../pages/user/Category/components/CategoryDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRout";
import Validate from "../pages/user/form/components/Validate";



export function AppRoutes() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />}/>
          <Route path="/category" element={<Category />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/form" element={<Validate />}/>
          <Route path="/paymentResault" element={<PaymentResault />} />
          <Route path="/productOverview/:productOverviewId" element={<ProductOverview />} />
          <Route path="/basketPage" element={<BasketPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="/login/product" element={<PrivateRoute><ProductList /></PrivateRoute>} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/order" element={<Order />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
