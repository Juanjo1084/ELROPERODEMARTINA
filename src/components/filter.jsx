import { useState } from 'react'
import '../styles/filter.css'
import FilterProducts from './filterproducts.jsx'

export default function Filter(){
const [showFilters, setShowFilters] = useState(false)

    return(
        <>
        <div className='filter'>
            <p className="marquee-text">
            ¡Grandes descuentos esta semana! 🛍️ Hasta 50% OFF en tu estilo favorito. ¡Compra ahora! &nbsp;
            ¡Grandes descuentos esta semana! 🛍️ Hasta 50% OFF en tu estilo favorito. ¡Compra ahora!
            </p>
            <button onClick={()=>setShowFilters(true)}><i class="fa-solid fa-filter"></i>Filtros</button>
            <FilterProducts 
            showFilters={showFilters} 
            setShowFilters={setShowFilters}/>
        </div>
        </>
    )
}