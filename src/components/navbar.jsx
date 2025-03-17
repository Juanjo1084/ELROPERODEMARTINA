import Search from './search.jsx'
import ShoppingCart from './shoppingcart.jsx'
import Favorite from './favorite.jsx'
import { useNavigate} from "react-router-dom";
import '../styles/navbar.css'
import { useState, useEffect } from "react";

export default function Navbar() {
const navigate = useNavigate();
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <>
        <div>
            <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                <button onClick={() => navigate("/products")}><img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="logo" /></button>
                <h1>EL ROPERO DE MARTINA</h1>
                <div className="buttons-navbar">
                    <Search />
                    <Favorite />
                    <ShoppingCart />
                </div>
            </div>
        </div>
        </>
    )
}