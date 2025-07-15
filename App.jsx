import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HighEnd from './pages/HighEnd';
import MidTier from './pages/MidTier';
import Beginner from './pages/Beginner';
import Contact from './pages/Contact';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Navbar from './components/Navbar';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const OrderForm = () => (
  <div className="w-full max-w-5xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Place Your PC Order</h2>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdXBWz6xd_2rvLB_HLXO1f1oFU-YjOexIaTlnJj0leNME0zag/viewform?embedded=true"
      width="100%"
      height="2051"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Order Form"
    >
      Loading…
    </iframe>
  </div>
);

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/high-end" element={<HighEnd />} />
            <Route path="/mid-tier" element={<MidTier />} />
            <Route path="/beginner" element={<Beginner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/order" element={<OrderForm />} />
          </Routes>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}