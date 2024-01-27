import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Product from "../pages/Product/Product";
import SingleProduct from "../pages/Product/SingleProduct";
import Bag from "../pages/Bag/Bag";
import Auth from "../pages/Auth/Auth";
import MemberInfo from "../pages/Member/MemberInfo";
import Registration from "../components/Auth/Registration";
import AccountLayout from "../layouts/Member/AccountLayout";
import Orders from "../components/Memeber/Orders";
import Profile from "../components/Memeber/Profile";
import Favorites from "../components/Memeber/Favorites";
import Settings from "../components/Memeber/settings/Settings";
import AccDetails from "../components/Memeber/settings/AccDetails";
import PaymentMethod from "../components/Memeber/settings/PaymentMethod";
import Visibility from "../components/Memeber/settings/Visibility";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import Admin from "../pages/Admin/Admin";
import AdminDashboard from "../components/Admin/AdminDashboard";
import ProductDashboard from "../components/Admin/Products/ProductDashboard";
import Category from "../components/Admin/Category/Category";

const Routers = () => {
    return (
        <div>
            <Routes>
                {/*----- Parent route -----*/}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="kids" element={<Kids />} />
                    <Route path="product" element={<Product />} />
                    <Route
                        path="singleProduct/:id"
                        element={<SingleProduct />}
                    />
                    <Route path="bag" element={<Bag />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="membershipInfo" element={<MemberInfo />} />
                    {/*----- Member -----*/}
                    <Route path="/member" element={<AccountLayout />}>
                        <Route path="profile" element={<Profile />}></Route>
                        <Route path="order" element={<Orders />}></Route>
                        <Route path="favorites" element={<Favorites />}></Route>
                        {/*----- Settings -----*/}
                        <Route path="settings" element={<Settings />}>
                            <Route index element={<AccDetails />}></Route>
                            <Route
                                path="payment"
                                element={<PaymentMethod />}
                            ></Route>
                            <Route
                                path="profile-visibility"
                                element={<Visibility />}
                            ></Route>
                        </Route>
                    </Route>
                </Route>
                {/*----- Auth routes----- */}
                <Route path="/auth">
                    <Route index element={<Auth />} />
                    <Route path="resignation" element={<Registration />} />
                </Route>
                {/*!----- Admin -----!*/}
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="products" element={<ProductDashboard />} />
                    <Route path="category" element={<Category />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routers;
