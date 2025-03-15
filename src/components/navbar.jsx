import Search from './search.jsx'
import ShoppingCart from './shoppingcart.jsx'
import Favorite from './favorite.jsx'
import { useNavigate } from "react-router-dom";
import '../styles/navbar.css'

export default function Navbar() {
const navigate = useNavigate();

    return (
        <>
        <div className='navbar'>
            <button onClick={() => navigate("/home")}><img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="logo" /></button>
            <h1>EL ROPERO DE MARTINA</h1>
            <div className="buttons-navbar">
                <Search />
                <Favorite />
                <ShoppingCart />
            </div>
        </div>
        </>
    )
}