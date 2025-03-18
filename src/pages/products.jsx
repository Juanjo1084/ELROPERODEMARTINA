import '../styles/products.css';
import { useFilters } from '../context/filtercontext.jsx';
import { products as initialProducts } from '../data/products.json';
import Filter from '../components/filter.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Products() {
  const { filterProducts } = useFilters();
  const { cart, addToCart } = useCart(); // Traemos el carrito y la función para agregar productos
  const filteredProducts = filterProducts(initialProducts);

  return (
    <div className='products-main'>
      <Filter />
      <main className="products">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No se encontraron productos con los filtros seleccionados.</p>
            <p>Por favor selecciona los filtros nuevamente.</p>
            <img src="https://i.postimg.cc/rpNjq7tY/logo-white.png" alt="No products" />
          </div>
        ) : (
          <ul>
            {filteredProducts.slice(0, 20).map((product) => {
              const isInCart = cart.some(item => item.id === product.id); // Verificamos si ya está en el carrito

              return (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <div>
                    <p>Precio: ${product.price}</p>
                    <p>Talla: {product.talla}</p>
                  </div>
                  <div className="button-products">
                    {/* Si el producto ya está en el carrito, deshabilitar el botón */}
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
  );
}


