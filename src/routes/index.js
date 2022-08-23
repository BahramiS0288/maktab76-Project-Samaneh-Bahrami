import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLayout } from "../Layout/userLayout/User.layout";
import { Homepage } from "../pages/user/homepage/Homepage";
import { Category } from "../pages/user/Category/Category.page";
import { Oncheckout } from "../pages/user/onCheackout/Oncheckout.page";
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

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Homepage />}/>
          <Route path="/category" element={<Category />} />
          <Route path="/oncheckout" element={<Oncheckout />} />
          <Route path="/paymentResault" element={<PaymentResault />} />
          <Route path="/productOverview" element={<ProductOverview />} />
          <Route path="/basketPage" element={<BasketPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/product" element={<ProductList />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/order" element={<Order />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
