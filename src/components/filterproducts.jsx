import "../styles/filterproducts.css"; 
import FilterType from './filtertype.jsx'

const FilterProducts = ({ filters, handleFilterChange, showFilters, setShowFilters }) => {
  return (
    <div className={`filter-container ${showFilters ? "show" : ""}`}>
      <button className="close-btn" onClick={() => setShowFilters(false)}>✖</button>

      <h2 className="filter-title">Filtrar Productos</h2>

      {/* Ordenar por precio */}
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

      {/* Filtro por tipo de prenda */}
      <label className="filter-label">Tipo de prenda:</label>
      <div className="filter-checkbox-group">
      <FilterType 
        name = "camiseta"
        filters = {filters} 
        onFilterChange={handleFilterChange}
        />
      <FilterType 
        name = "Jean"
        filters = {filters} 
        onFilterChange={handleFilterChange}
        />
      <FilterType 
        name = "chaquetas"
        filters = {filters} 
        onFilterChange={handleFilterChange}
        />  
      </div>

      

      {/* Filtro por talla */}
      <label className="filter-label">Selecciona Talla:</label>
      <select
        value={filters.talla}
        onChange={(e) => handleFilterChange({ talla: e.target.value })}
        className="filter-select"
      >
        <option value="all">Todas</option>
        <option value="S">S</option>
        <option value="4">4</option>
        <option value="6">6</option>
        
      </select>
    </div>
  );
};

export default FilterProducts;
