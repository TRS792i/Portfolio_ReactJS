import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Mentions from './pages/Mentions.jsx';

const router = createBrowserRouter ([
  {path: '/' , element: <App />},
  {path: '/Services' , element: <Services />},
  {path: '/Portfolio' , element: <Portfolio />},
  {path: '/Contact' , element: <Contact />},
  {path: '/Mentions' , element: <Mentions />}
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
