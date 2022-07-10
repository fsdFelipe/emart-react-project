import "./styles.css";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Produtos from "./components/produtos/produtos";
import Produto from "./components/produto/produto";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<Produto />} />
      </Routes>
    </>
  );
}
