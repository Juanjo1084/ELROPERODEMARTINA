import { useNavigate } from "react-router-dom";
import HomeProducts from '../components/homeproducts.jsx'
import '../styles/home.css'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-header">
        <div className="home-header-text">
          <h1>Bienvenido a nuestra tienda</h1>
          <h2>Viste con Estilo, Apoya el Talento Colombiano</h2>
        </div>
      </div>
        <section class="general">
            <div class="general-1">
                <h2>Sobre Nuestra Tienda</h2>
                <p>Desde hace más de 6 años, nuestra tienda se ha consolidado como un referente en la comercialización de ropa exclusivamente de marcas colombianas. Nos enorgullece trabajar con diseñadores y fabricantes nacionales, quienes han logrado posicionarse en la industria gracias a la excelente calidad de sus prendas, diseños innovadores y precios accesibles. Cada prenda que ofrecemos es el resultado del talento colombiano, pensado para brindarte comodidad, elegancia y autenticidad en cada ocasión.</p>
            </div>
            <div class="general-2"></div>
        </section>
        <section class="general">
            <div class="general-3"></div>
            <div class="general-1">
                <h2>Sobre nuestros productos</h2>
                <p>En nuestra colección encontrarás una gran variedad de opciones para todos los estilos y necesidades. Desde jeans de marcas reconocidas como Leoniza, Osiris y Aranza, hasta prendas versátiles como gabanes, blusas, chaquetas, shorts, faldas y más. Además, contamos con una selección de calzado que incluye zapatillas y tennis de alta calidad, perfectos para completar tu outfit con un toque de modernidad y confort. Nos esforzamos por mantener un catálogo actualizado con las últimas tendencias, asegurando que cada cliente encuentre exactamente lo que busca.</p>
            </div>
        </section>
      <div className="home">
      <div className="home-main">
          <h2>Categorías</h2>
          <div className="home-products">
            <HomeProducts productTitle='Jeans' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/4100732-483-725?v=638667348051500000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Gabanes' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/4247616-483-725?v=638744269622130000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Blusas' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/3728407-483-725?v=638531704850170000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Zapatillas' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" />
          </div>
          <div className="home-products">
            <HomeProducts productTitle='Jeans' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/4100732-483-725?v=638667348051500000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Gabanes' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/4247616-483-725?v=638744269622130000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Blusas' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/3728407-483-725?v=638531704850170000&width=483&height=725&aspect=true" />
            <HomeProducts productTitle='Zapatillas' productImage="https://hmcolombia.vtexassets.com/arquivos/ids/3873195-483-725?v=638585284597570000&width=483&height=725&aspect=true" />
          </div>
          <h2>¡Descubre nuestra colección y encuentra tu estilo ideal!</h2>
          <h2>Haz clic en el botón a continuación y explora todos nuestros productos.</h2>
          <button className="btn-products"  onClick={() => {window.scrollTo(0, 0); navigate("/products");}}>Vamos de Compras</button>
      </div>  
      </div>
    </>
  )
}
