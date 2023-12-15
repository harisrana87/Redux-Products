import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './Redux/store';
import SigninForm from './Pages/Signinform';
import SignupForm from './Pages/SignupForm';
import ProductPage from './Pages/productPage';
import CartPage from "./Pages/cart"
import SuccessPage from './Pages/SuccessPage';
import Home from "./Pages/home"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;