import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/AdminNavbar';
import Footer from './components/AdminFooter';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Profile from './pages/Profile';
import './App.css';
import { OrdersProvider } from './context/OrdersContext';

function App() {
  return (
    <OrdersProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </OrdersProvider>
  );
}

export default App;