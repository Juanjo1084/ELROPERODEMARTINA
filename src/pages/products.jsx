import '../styles/products.css';
import { useFilters } from '../context/filtercontext.jsx';
import { products as initialProducts } from '../data/products.json';
import Filter from '../components/filter.jsx';
import { useCart } from '../context/CartContext.jsx'; // Importamos el contexto del carrito

export default function Products() {
  const { filterProducts } = useFilters();
  const { addToCart } = useCart(); // Usamos la función para agregar productos al carrito
  const filteredProducts = filterProducts(initialProducts);

  return (
    <div className='products-main'>
      <Filter />
      <main className="products">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No se encontraron productos con los filtros seleccionados.</p>
            <p>Por favor selecciona los filtros nuevamente. </p>
            <img src="https://i.postimg.cc/rpNjq7tY/logo-white.png" alt="No products" />
          </div>
        ) : (
          <ul>
            {filteredProducts.slice(0, 20).map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <div>
                  <p>Precio: ${product.price}</p>
                  <p>Talla: {product.talla}</p>
                </div>
                <div className="button-products">
                  {/* Botón de añadir al carrito */}
                  <button onClick={() => addToCart(product)}>
                    <i className="fa-solid fa-bag-shopping"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

