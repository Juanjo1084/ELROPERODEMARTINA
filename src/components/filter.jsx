import { useState } from 'react'
import '../styles/filter.css'
import FilterProducts from './filterproducts.jsx'

export default function Filter(){
const [showFilters, setShowFilters] = useState(false)

    return(
        <>
        <div className='filter'>
            <p className="marquee-text">
            ✨ "¡Renueva tu armario con los mejores descuentos! 🛍️ En El Ropero de Martina, 
            premiamos tu estilo: compra 2 o más productos y disfruta de descuentos exclusivos 
            en nuestra colección. 🔥 Encuentra jeans, blusas, chaquetas, vestidos y mucho más 
            con rebajas de hasta el 20%. ¡No dejes pasar esta oportunidad! Luce increíble, 
            ahorra y vive la moda a tu manera. Además, envíos rápidos y garantía en todas tus 
            compras. 🏷️💃✨ ¡Compra hoy y estrena con estilo!"
            </p>
            <button onClick={()=>setShowFilters(true)}><i class="fa-solid fa-filter"></i>Filtros</button>
            <FilterProducts 
            showFilters={showFilters} 
            setShowFilters={setShowFilters}/>
        </div>
        </>
    )
}