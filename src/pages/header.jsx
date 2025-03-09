import Navbar from '../components/navbar.jsx'
import Filter from '../components/filter.jsx'
import '../styles/header.css'

export default function Header({filters, handleFilterChange}) {
    return (
        <>
        <Navbar />
        <Filter filters = {filters} handleFilterChange={handleFilterChange} />
        
        </>
    )
}

