import { createRoot } from 'react-dom/client';
import Main from './pages/Main';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Navbar from './ui/Navbar';
import Shop from './pages/Shop';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(



<BrowserRouter>
<Navbar />
<Routes>

<Route path="/" element={<Main />} />
<Route path="/contact-us" element={<Contact />} />
<Route path="/Shop" element={<Shop />} />

</Routes>

</BrowserRouter>






);
