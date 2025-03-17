import { createContext, useState, useContext } from "react";

// Creamos el contexto
const CartContext = createContext();

// Hook personalizado para usar el carrito
export const useCart = () => useContext(CartContext);

// Proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
