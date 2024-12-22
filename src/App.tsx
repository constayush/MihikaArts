import { createRoot } from 'react-dom/client';
import Main from './main';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(



<BrowserRouter>
<Routes>

<Route path="/" element={<Main />} />
<Route path="/contact-us" element={<Contact />} />
{/* <Route path="privacy-policy" element={<Main />} /> */}
</Routes>

</BrowserRouter>






);
