import "./styles.css";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Produtos from "./components/produtos/produtos";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </>
  );
}
