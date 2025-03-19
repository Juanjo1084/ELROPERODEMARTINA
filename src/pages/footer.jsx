import '../styles/footer.css'

export default function Footer(){
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
                    <div className='footer-help'>
                        <h3>AYUDA</h3>
                        <p>Envíos</p>
                    </div>
                    <div className='footer-about'>
                        <h3>SOBRE LA TIENDA</h3>
                        <p>Mercancias</p>
                        <p>Direccion Calle 16</p>
                        <p>Sibundoy Putumayo</p>
                    </div>
                    <div className='footer-contact'>
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
            </div>
        </div>
    )
}