import '../styles/navbar.css'
import ShoppingCart from './shoppingcart.jsx'
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { usePageTransition } from '../context/pagetransitioncontext.jsx';

export default function Navbar() {
const navigate = useNavigate();
const [isScrolled, setIsScrolled] = useState(false);
const { startTransition } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
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
                <button onClick={() => startTransition(() => {window.scrollTo(0, 0); navigate("/")})}><img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="logo" /></button>
                <h1>EL ROPERO DE MARTINA</h1>
                <div className="buttons-navbar">
                    <ShoppingCart />
                </div>
            </div>
        </div>
        </>
    )
}