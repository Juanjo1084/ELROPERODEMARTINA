import { useState } from "react";
import "../styles/shoppingcart.css";
import { useCart } from "../context/CartContext.jsx";

export default function ShoppingCart() {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el carrito

    return (
        <div className="shopping-cart-container">
            {/* Botón del carrito con contador */}
            <button className="shopping-cart-button" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa-solid fa-bag-shopping"></i>
                {cart.length > 0 && <span className="counter-shopping">{cart.length}</span>}
            </button>

            {/* Contenedor del carrito (solo se muestra si isOpen es true) */}
            <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
                <h2>Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <p className="empty-cart">Tu carrito está vacío.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <h3>{item.title}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Talla: {item.talla}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

