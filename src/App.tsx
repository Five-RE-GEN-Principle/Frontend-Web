import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "@pages/HomePage";
import Header from "@components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
