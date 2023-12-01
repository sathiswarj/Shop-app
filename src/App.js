 
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import { ShopContextProvider } from "./Components/shop-context";
 import { BrowserRouter as Router  , Route, Routes} from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Account from "./Components/Account";
  function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/product" element={<Product />} />
            <Route  path="/cart"  element={<Cart />} />
            <Route  path="/account"  element={<Account />} />

          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
