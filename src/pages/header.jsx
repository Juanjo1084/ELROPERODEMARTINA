import Navbar from '../components/navbar.jsx'
import '../styles/header.css'
import Home from './home.jsx'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-01'>
                <p>Envío gratis a toso los destinos por compras mayores a 250.000$</p>
            </div>
            <Navbar />
            {/* <Home />         */}
        </div>
    )
}

