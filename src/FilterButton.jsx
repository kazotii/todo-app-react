function FilterButton({text, value, setFil, activeFilter}){
    return(
        <button 
        className={activeFilter === value ? 'active-button' : ''}
        onClick={() => setFil(value)}>{text}</button>
    )
}

export default FilterButton