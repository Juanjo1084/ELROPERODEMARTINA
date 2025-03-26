import '../styles/inicio.css'
import { useNavigate } from "react-router-dom";

export default function Inicio() {
const navigate = useNavigate();

    return(
        <section className='inicio'>
            <div className="inicio-main">
                <img src="https://img.freepik.com/vector-gratis/maniquies-composicion-realista-imagen-aislada-ilustracion-vector-cuerpo-femenino-ficticio-pie_1284-66857.jpg?t=st=1742999928~exp=1743003528~hmac=71242aea9fe53526cf06f8f7d0249c205231c40d98ed82f75265925570b45430&w=360" alt="" />
                <div className='inicio-text'>
                    <h1>Bienvedida al Ropero de Martina</h1>
                    <h2>Glamur, Fashion y Calidad</h2>
                    <button onClick={() => {window.scrollTo(0, 0); navigate("/products")}}>Comprar</button>
                </div>
            </div>
        </section>
    )
}