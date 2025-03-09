const FilterType = ({ name, filters, onFilterChange }) => {
    const isChecked = filters.type === name; // Comprueba si está seleccionado
  
    const handleChange = () => {
      onFilterChange({ type: isChecked ? "all" : name }); // Alterna entre el tipo y "all"
    };
  
    return (
      <label className="filter-checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {name.charAt(0).toUpperCase() + name.slice(1)} {/* Capitaliza el texto */}
      </label>
    );
  };
  
  export default FilterType;