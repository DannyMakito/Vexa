/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import DemoForm from './components/DemoForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-vexa-light font-sans text-vexa-dark selection:bg-vexa-brand selection:text-vexa-dark">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <DemoForm />
        <Footer />
      </div>
    </Router>
  );
}
