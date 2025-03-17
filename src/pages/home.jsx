import { useNavigate } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import '../styles/home.css'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
        {/* <Carousel /> */}
    <div className="home-main">
        {/* <h1>Bienvenido a nuestra tienda</h1> */}
        <h2>Viste con Estilo, Apoya el Talento Colombiano</h2>
        <p>Desde hace más de 6 años, nuestra tienda se ha consolidado como un referente en la comercialización de ropa exclusivamente de marcas colombianas. Nos enorgullece trabajar con diseñadores y fabricantes nacionales, quienes han logrado posicionarse en la industria gracias a la excelente calidad de sus prendas, diseños innovadores y precios accesibles. Cada prenda que ofrecemos es el resultado del talento colombiano, pensado para brindarte comodidad, elegancia y autenticidad en cada ocasión.</p>
        <p>En nuestra colección encontrarás una gran variedad de opciones para todos los estilos y necesidades. Desde jeans de marcas reconocidas como Leoniza, Osiris y Aranza, hasta prendas versátiles como gabanes, blusas, chaquetas, shorts, faldas y más. Además, contamos con una selección de calzado que incluye zapatillas y tennis de alta calidad, perfectos para completar tu outfit con un toque de modernidad y confort. Nos esforzamos por mantener un catálogo actualizado con las últimas tendencias, asegurando que cada cliente encuentre exactamente lo que busca.</p>
        <p>Comprar en nuestra tienda no solo significa adquirir ropa de excelente calidad, sino también apoyar la industria nacional y el esfuerzo de emprendedores colombianos que trabajan día a día para ofrecer lo mejor de la moda. Nos encanta ser parte de tu estilo y ayudarte a expresar tu personalidad a través de la ropa.</p>
        <h2>¡Descubre nuestra colección y encuentra tu estilo ideal!</h2>
        {/* <h2>Haz clic en el botón a continuación y explora todos nuestros productos.</h2> */}
    </div>
        {/* <button className="btn-products"  onClick={() => {window.scrollTo(0, 0); navigate("/products");}}>Vamos de Compras</button> */}
    </div>
  )
}
