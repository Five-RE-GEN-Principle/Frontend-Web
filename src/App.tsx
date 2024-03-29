import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "@pages/HomePage";

import Layout from "@components/Layout";
import AboutPage from "@pages/AboutPage";

import CalculatorPage from "@pages/CalculatorPage";
import CalculatorLayout from "@pages/CalculatorPage/CalculatorLayout";
import FashionPage from "@pages/CalculatorPage/FashionPage";
import BeautyPage from "@pages/CalculatorPage/BeautyPage";
import FoodPage from "@pages/CalculatorPage/FoodPage";
import RestaurantPage from "@pages/CalculatorPage/RestaurantPage";

import CertMarkPage from "@pages/CertMarkPage";
import ShoppingBeauty from "@pages/ShoppingBeauty";
import ShoppingFashion from "@pages/ShoppingFashion";
import ShoppingFood from "@pages/ShoppingFood";
import SearchRestaurant from "@pages/SearchRestaurant";
import BulletinBoardPage from "@pages/BulletinBoardPage";
import QnAPage from "@pages/QnAPage";
import NoticePage from "@pages/NoticePage";
import LoginPage from "@pages/LoginPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="calculator" element={<CalculatorLayout />}>
          <Route index element={<CalculatorPage />} />
          <Route path="fashion" element={<FashionPage />} />
          <Route path="beauty" element={<BeautyPage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
        </Route>
        <Route path="certmark" element={<CertMarkPage />} />
        <Route path="bulletinboard" element={<BulletinBoardPage />} />
        <Route path="qna" element={<QnAPage />} />
        <Route path ="shoppingbeauty" element={<ShoppingBeauty/>}/>
        <Route path ="shoppingfashion" element={<ShoppingFashion/>}/>
        <Route path ="shoppingfood" element={<ShoppingFood/>}/>
        <Route path ="searchrestaurant" element={<SearchRestaurant/>}/>
        <Route path="bulletinboard" element={<BulletinBoardPage />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
