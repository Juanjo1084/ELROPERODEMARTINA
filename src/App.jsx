import { useState } from 'react'
import './styles/App.css'
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import Products from './pages/products.jsx'
import {products as initialProducts} from './data/products.json'

function App() {
const [products] = useState(initialProducts)
const [filters, setFilters] = useState({
  minPrice: 0,
  type : 'all',
  talla : 'all',
  sortPrice : 'normal'
})

const filterProducts = (products) => {
  let filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= filters.minPrice;

    const matchesType = filters.type === "all" || product.type === filters.type;

    const matchesTalla =
      filters.talla === "all" ||
      product.talla === filters.talla || // Para tallas en texto
      Number(product.talla) === Number(filters.talla); // Para tallas numéricas

    return matchesPrice && matchesType && matchesTalla;
  });

  // Ordenar por precio si es necesario
  if (filters.sortPrice !== "normal") {
    filteredProducts = [...filteredProducts].sort((a, b) => 
      filters.sortPrice === "menor" ? a.price - b.price : b.price - a.price
    );
  }

  return filteredProducts;
};

const handleFilterChange = (newFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    ...newFilters,
  }));
};

  return (
    <>
    <div className='app'>
      <Header filters={filters} handleFilterChange={handleFilterChange}/>
      <Products products={filterProducts(products)} />
      <a className='button-whats' href="#"><i class="fa-brands fa-square-whatsapp"></i></a>

    </div>
      <Footer />
    </>
  )
}

export default App
