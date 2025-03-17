import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import Products from './pages/products.jsx'
import LandingPage from './pages/landingpage.jsx'
import Home from './pages/home.jsx'

function App() {

  return (
    <>
    <div className='app'>
      <LandingPage />
      <Header />
      <div className='app-main'>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
            <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <a className='button-whats' href="#"><i class="fa-brands fa-square-whatsapp"></i></a>
      <Footer />
    </div>
    </>
  )
}

export default App
