import { useState } from 'react'
import '../styles/filter.css'
import FilterProducts from './filterproducts.jsx'

export default function Filter(){
const [showFilters, setShowFilters] = useState(false)

    return(
        <>
        <div className='filter'>
            <button onClick={()=>setShowFilters(true)}><i class="fa-solid fa-filter"></i>Filtros</button>
            <FilterProducts 
            showFilters={showFilters} 
            setShowFilters={setShowFilters}/>
        </div>
        </>
    )
}