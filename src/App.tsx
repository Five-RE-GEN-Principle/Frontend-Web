import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "@pages/HomePage";

import Layout from "@components/Layout";
import AboutPage from "@pages/AboutPage";
import CalculatorPage from "@pages/CalculatorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
