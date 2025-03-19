import { useParams } from "react-router-dom";
import { products } from "../data/products.json";
import { useCart } from "../context/cartcontext.jsx";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import "../styles/details.css";

export default function Details() {
const { id } = useParams(); 
const { addToCart, cart, removeFromCart } = useCart();
const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(true); 


  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="details-main">
        <div className="details-container">
            <img className="details-img" src={product.image} alt={product.title} />
            <div className="details-info">
                <div className="details-text">
                    <h2>{product.title}</h2>
                    <p>Descripción: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus saepe tempore repellat ab ipsam. Modi labore doloribus iure eum aut alias quidem eaque delectus nobis. Natus recusandae aut minus dolorum.</p>
                    <div className="details-price">
                        <p>Precio:</p>
                        <h3>{product.price} $</h3>
                        <h3>COP</h3>
                    </div>
                    <div className="details-talla">
                        <p>Talla:</p>
                        <h3>{product.talla}</h3>
                    </div>
                    <p>{product.description}</p>
                </div>
                <div className="details-btn">
                    <button 
                    onClick={() => addToCart(product)} 
                    disabled={isInCart}
                    className={isInCart ? 'disabled-btn' : ''}
                    >
                    {isInCart ? "Añadido" : "Añadir"}
                    </button>
                    <button onClick={() => navigate("/products")}>Volver al Comercio</button>
                </div>
            </div>
            <div className={`details-cart ${isOpen ? "open" : ""}`}>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="empty-details">Tu carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="details-item">
                            <img src={item.image} alt={item.title} />
                            <div className="details-item-info">
                                <h3>{item.title}</h3>
                                <p>Precio: ${item.price}</p>
                                <p>Talla: {item.talla}</p>
                            </div>
                            <button className="details-remove-btn" onClick={() => removeFromCart(item.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
    </div>
  );
}
