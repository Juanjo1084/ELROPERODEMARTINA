import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from './context/filtercontext.jsx'
import { CartProvider } from './context/cartcontext.jsx'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </FilterProvider>,
)
