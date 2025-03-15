import { useState } from 'react'
import '../styles/filter.css'
import FilterProducts from './filterproducts.jsx'

export default function Filter(){
const [showFilters, setShowFilters] = useState(false)

    return(
        <>
        <div className='filter'>
            <div className='filter-pages'>
                <h3>Vistete a tu propío estílo <i class="fa-solid fa-heart"></i></h3>
            </div>
            <button onClick={()=>setShowFilters(true)}><i class="fa-solid fa-filter"></i> Filtrar</button>
            <FilterProducts 
            showFilters={showFilters} 
            setShowFilters={setShowFilters}/>
        </div>
        </>
    )
}