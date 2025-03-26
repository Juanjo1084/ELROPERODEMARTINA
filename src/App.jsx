import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import Products from './pages/products.jsx'
import LandingPage from './pages/landingpage.jsx'
import Details from './components/details.jsx'
import Home from './pages/home.jsx'
import Checkout from './components/checkout.jsx';
import Inicio from './pages/inicio.jsx';

function App() {

  return (
    <>
    <div className='app'>
      <LandingPage />
      <Header />
      <div className='app-main'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobrenosotros" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <a className='button-whats' href="https://wa.me/573143887170"><i class="fa-brands fa-square-whatsapp"></i></a>
      <Footer />
    </div>
    </>
  )
}

export default App
