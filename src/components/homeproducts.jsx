import '../styles/homeproducts.css'

export default function HomeProducts({productTitle, productImage}) {
    return(
        <div className='homeproducts'>
        <h3>{productTitle}</h3>
        <img src={productImage} alt="productTitle" />
        </div>
    )
}