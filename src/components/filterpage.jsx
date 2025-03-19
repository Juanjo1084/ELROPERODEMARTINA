import "../styles/filterpage.css"; 
import { useFilters } from '../context/filtercontext.jsx'

const FilterPage = () => {
const {filters} = useFilters();
const {handleFilterChange} = useFilters();

  return (
    <div className="page-container">
        <h2 className="page-title">Filtrar Productos</h2>
        <label className="page-label">Ordenar por precio:</label>
        <div className="filter-checkboxes">
        {[
            { value: "normal", label: "Normal" },
            { value: "menor", label: "Menor Precio" },
            { value: "mayor", label: "Mayor Precio" },
        ].map((option) => (
        <label key={option.value} className="checkbox-label">
            <input
                type="checkbox"
                checked={filters.sortPrice === option.value}
                onChange={() => handleFilterChange({ sortPrice: option.value })}
            />
            {option.label}
        </label>
        ))}
        </div>

        <label className="page-label">Selecciona Talla:</label>
        <div className="filter-buttons">
        {["all", "XS", "S", "4", "6", "8", "10", "12", "14", "16"].map((size) => (
        <button
            key={size}
            onClick={() => handleFilterChange({ talla: size })}
            className={`filter-btn ${filters.talla === size ? "active" : ""}`}
        >
            {size === "all" ? "Todas" : size}
        </button>
        ))}
        </div>

    </div>
  );
};

export default FilterPage
