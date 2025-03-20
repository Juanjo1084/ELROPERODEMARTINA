import "../styles/filterpage.css"; 
import { useFilters } from '../context/filtercontext.jsx'

const FilterPage = () => {
const {filters} = useFilters();
const {handleFilterChange} = useFilters();

  return (
    <div className="page-container">
        <h2 className="page-title">Filtrar Productos</h2>
        <label className="page-label">Ordenar por precio:</label>
<div className="filter-buttons-price">
  {[
    { value: "normal", label: "Normal" },
    { value: "menor", label: "Menor Precio" },
    { value: "mayor", label: "Mayor Precio" },
  ].map((option) => (
    <button
      key={option.value}
      className={`filter-btn ${filters.sortPrice === option.value ? "active" : ""}`}
      onClick={() => handleFilterChange({ sortPrice: option.value })}
    >
      {option.label}
    </button>
  ))}
</div>


<label className="page-label">Ordenar por categoría:</label>
<div className="filter-category">
  <div className="filter-buttons-category">
    {["all", "Jeans", "Shirts", "Dresses", "Jackets"].map((category) => (
      <button
        key={category}
        className={`filter-btn-category ${filters.category === category ? "active" : ""}`}
        onClick={() => handleFilterChange({ category })}
      >
        {category === "all" ? "Todas" : category}
      </button>
    ))}
  </div>
</div>


<label className="page-label">Selecciona Talla:</label>
<div className="filter-buttons-category">
  <button
    key="all"
    onClick={() => handleFilterChange({ talla: "all" })}
    className={`filter-btn ${filters.talla === "all" ? "active" : ""}`}
  >
    Todas
  </button>
</div>
<div className="filter-buttons">
  {["XS", "S", "4", "6", "8", "10", "12", "14", "16", "18"].map((size) => (
    <button
      key={size}
      onClick={() => handleFilterChange({ talla: size })}
      className={`filter-btn ${filters.talla === size ? "active" : ""}`}
    >
      {size}
    </button>
  ))}
</div>



    </div>
  );
};

export default FilterPage
