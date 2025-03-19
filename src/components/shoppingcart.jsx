import { useState } from "react";
import "../styles/shoppingcart.css";
import { useCart } from "../context/cartcontext.jsx";

export default function ShoppingCart() {
    const { cart, removeFromCart } = useCart();
    const [isOpen, setIsOpen] = useState(false); 

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
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="cart-item-info">
                                    <h3>{item.title}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Talla: {item.talla}</p>
                                </div>
                                {/* Botón para eliminar el producto */}
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


