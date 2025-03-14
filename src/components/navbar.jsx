import Search from './search.jsx'
import ShoppingCart from './shoppingcart.jsx'
import Favorite from './favorite.jsx'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <>
        <div className='navbar'>
            <img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="logo" />
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