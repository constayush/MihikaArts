import { createRoot } from 'react-dom/client';
import React from 'react';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Navbar from './ui/Navbar';
import Shop from './pages/Shop';
import Product from './pages/Product';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter >
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    </BrowserRouter>
);
