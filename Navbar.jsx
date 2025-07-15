import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Joga</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/high-end">High-End</Link>
        <Link to="/mid-tier">Mid-Tier</Link>
        <Link to="/beginner">Beginner</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/order">Order</Link>
      </div>
    </nav>
  );
}