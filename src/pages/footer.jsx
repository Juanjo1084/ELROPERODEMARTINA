import '../styles/footer.css'
import { usePageTransition } from '../context/pagetransitioncontext'
import { useNavigate } from 'react-router-dom';

export default function Footer(){
const { startTransition } = usePageTransition();
const navigate = useNavigate();

    return(
        <div className="footer-container">
            <div className="footer">
                <h2>EL ROPERO DE MARTINA</h2>
                <div className='footer-networks'>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <div className='footer-info'>
                    <div className='footer-about'>
                        <h3>AYUDA</h3>
                        <p>Envíos</p>
                    </div>
                    <div className='footer-about'>
                        <h3>SOBRE LA TIENDA</h3>
                        <button className='links' onClick={() => startTransition(() => {window.scrollTo(0, 0); navigate("/sobrenosotros")})}>Sobre Nosotros</button>
                        <p>Direccion Calle 16</p>
                        <p>Sibundoy Putumayo</p>
                    </div>
                    <div className='footer-about'>
                        <h3>CONTACTO</h3>
                        <p>3143887170</p>

                    </div>
                </div>
                <div className='footer-line'></div>
                <div className="footer-conditions">
                    <p>TERMINOS Y CONDICIONES</p>
                    <p>POLÍTICA DE PRIVACIDAD</p>
                    <p>SUPERINTENDENCIA</p>
                </div>
                <p>©ELROPERODEMARTINA | Todos los derechos reservados</p>
            </div>
        </div>
    )
}