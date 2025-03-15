// src/context/FilterContext.jsx
import { createContext, useState, useContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    type: "all",
    talla: "all",
    sortPrice: "normal",
  });

  const filterProducts = (products) => {
    let filteredProducts = products.filter((product) => {
      const matchesPrice = product.price >= filters.minPrice;
      const matchesType = filters.type === "all" || product.type === filters.type;
      const matchesTalla =
        filters.talla === "all" ||
        product.talla === filters.talla ||
        Number(product.talla) === Number(filters.talla);

      return matchesPrice && matchesType && matchesTalla;
    });

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
    <FilterContext.Provider value={{ filters, setFilters, filterProducts, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
