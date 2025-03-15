import "../styles/filterproducts.css"; 
import FilterType from './filtertype.jsx'
import { useFilters } from '../context/filtercontext.jsx'

const FilterProducts = ({ showFilters, setShowFilters }) => {
const {filters} = useFilters();
const {handleFilterChange} = useFilters();

  return (
    <div className={`filter-container ${showFilters ? "show" : ""}`}>
      <button className="close-btn" onClick={() => setShowFilters(false)}>✖</button>

      <h2 className="filter-title">Filtrar Productos</h2>

      <label className="filter-label">Ordenar por precio:</label>
      <select
        value={filters.sortPrice}
        onChange={(e) => handleFilterChange({ sortPrice: e.target.value })}
        className="filter-select"
      >
        <option value="normal">Normal</option>
        <option value="menor">Menor Precio</option>
        <option value="mayor">Mayor Precio</option>
      </select>



      <label className="filter-label">Selecciona Talla:</label>
      <select
        value={filters.talla}
        onChange={(e) => handleFilterChange({ talla: e.target.value })}
        className="filter-select"
      >
        <option value="all">Todas</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        
      </select>
    </div>
  );
};

export default FilterProducts;
