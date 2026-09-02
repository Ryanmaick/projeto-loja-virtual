import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SenhaPage from './pages/SenhactsPage.jsx';

const waze = createBrowserRouter([
  {
    path: "Contatos",
    element: <ContactPage/>,  
  },

  {
    path: "Produtos",
    element: <ProductsPage/>,  
  },

  {
    path: "Senha",
    element: <SenhactsPage/>,  
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={waze} />,
  </StrictMode>,
)
