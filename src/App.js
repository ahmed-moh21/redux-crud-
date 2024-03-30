import AppNav from "./Component/AppNav";
import Product from "./Component/Product";
import { Route, Routes } from "react-router";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <AppNav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
