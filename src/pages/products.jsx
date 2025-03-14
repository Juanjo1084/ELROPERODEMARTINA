import '../styles/products.css'

export default function Products({products}){

    return(
        <>
        <main className="products">
            <ul>
                {products.slice(0, 20).map((product)=>
                    <li key={product.id}>
                        <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                        <div>
                            <p>Precio: ${product.price}</p>
                            <p>Talla: {product.talla}</p>
                        </div>
                        <div className='button-products'>
                            <button><i class="fa-regular fa-heart"></i></button>
                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </li>
                )}
            </ul>
        </main>
        </>
    )
}
