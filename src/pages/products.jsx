import '../styles/products.css';
import { useFilters } from '../context/filtercontext.jsx';
import { products as initialProducts } from '../data/products.json';
import Filter from '../components/filter.jsx';
import FilterPage from '../components/filterpage.jsx';
import { useCart } from '../context/cartcontext.jsx';
import { Link } from 'react-router-dom'; // Importar Link para navegación

export default function Products() {
  const { filterProducts } = useFilters();
  const { cart, addToCart } = useCart();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
        <Filter />
    <div className="products-container">
      <div className='products-filter'>
        <FilterPage />
      </div>
      <div className='products-main'>
        <main className="products">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No se encontraron productos con los filtros seleccionados.</p>
              <p>Por favor selecciona los filtros nuevamente.</p>
              <img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="No products" />
            </div>
          ) : (
            <ul>
              {filteredProducts.slice(0, 20).map((product) => {
                const isInCart = cart.some(item => item.id === product.id);
                return (
                  <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <Link to={`/details/${product.id}`} className="details-button">
                        Detalles
                    </Link>
                    <h3>{product.title}</h3>
                    <div>
                      <p>Precio: ${product.price}</p>
                      <p>Talla: {product.talla}</p>
                    </div>
                    <div className="button-products">
                      <button 
                        onClick={() => addToCart(product)} 
                        disabled={isInCart}
                        className={isInCart ? 'disabled-btn' : ''}
                      >
                        <i className="fa-solid fa-bag-shopping"></i>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </main>
      </div>
    </div>
    </>
  );
}
