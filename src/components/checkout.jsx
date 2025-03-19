import { useCart } from "../context/cartcontext.jsx";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function Checkout() {
    const { cart } = useCart();
    const navigate = useNavigate();

    // Calcular el descuento según la cantidad de productos
    const totalItems = cart.length;
    let discountPercentage = 0;

    if (totalItems === 2) discountPercentage = 2;
    else if (totalItems === 3) discountPercentage = 3;
    else if (totalItems === 4) discountPercentage = 4;
    else if (totalItems >= 5) discountPercentage = 10;

    // Calcular el precio total sin descuento
    const priceTotal = cart.reduce((total, item) => total + item.price, 0);

    // Calcular el total con descuento aplicado a cada producto
    const priceWithDiscount = cart.reduce((total, item) => {
        const discountedPrice = item.price - (item.price * discountPercentage) / 100;
        return total + discountedPrice;
    }, 0);

    return (
        <div className="checkout-main">
            <div className="checkout-container">
                <h1>Resumen de tu compra</h1>
                <p>Recuerda que el descuento en nuestra página web aplica según la cantidad de productos que lleves. Este descuento se aplica sobre el precio de cada producto.</p>
                
                <div className="checkout-titles">
                    <h2>Productos</h2>
                    <h2>Precios</h2>
                </div>

                {cart.length === 0 ? (
                    <div className="no-checkout-main">
                        <div className="no-checkout">
                            <p>No elegiste ningín pruducto</p>
                            <p>Regresa a nuestros productos y animate por lo que mas se acomode a tu estilo</p>
                            <button onClick={() => navigate("/products")}>Volver al Comercio</button>
                            <img src="https://i.postimg.cc/yNHn47WZ/logo-black.png" alt="No products" />
                        </div>
                    </div>
                ) : (
                    <div className="checkout-all">
                        <ul>
                            {cart.map((item) => {
                                const discountedPrice = item.price - (item.price * discountPercentage) / 100;
                                return (
                                    <li key={item.id} className="checkout-item">
                                        <div className="checkout-item-main">
                                            <img src={item.image} alt={item.title} />
                                            <div className="checkout-info">
                                                <h3>{item.title}</h3>
                                                <p>Talla: {item.talla}</p>
                                            </div>
                                        </div>
                                        <p>${item.price} → <span className="discounted-price">${discountedPrice}</span></p>
                                    </li>
                                );
                            })}
                        </ul>                        
                        <div className="checkout-total">
                            <h3>Total antes del descuento:</h3>
                            <h3>${priceTotal}</h3>
                        </div>

                        <div className="checkout-down">
                            <h3>Descuento aplicado:</h3>
                            <h3>{discountPercentage}%</h3>
                        </div>

                        <div className="checkout-final-price">
                            <h3>Total con descuento:</h3>
                            <h3>${priceWithDiscount}</h3>
                        </div>

                        <div className="checkout-button">
                            <button className="pay-button">Proceder al pago</button>
                            <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
