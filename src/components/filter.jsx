import { useState } from 'react'
import '../styles/filter.css'
import FilterProducts from './filterproducts.jsx'

export default function Filter({filters, handleFilterChange}){
const [showFilters, setShowFilters] = useState(false)



    return(
        <>
        <div className='filter'>
            <div className='filter-pages'>
                <h3>All</h3>
                <h3>Pantalones</h3>
                <h3>Chaquetas</h3>
                <h3>Bodys</h3>
                <h3>Blusas</h3>
            </div>
            <button onClick={()=>setShowFilters(true)}><i class="fa-solid fa-filter"></i> Filtrar</button>
            <FilterProducts 
            filters = {filters} 
            handleFilterChange={handleFilterChange} 
            showFilters={showFilters} 
            setShowFilters={setShowFilters}/>
        </div>
        </>
    )
}