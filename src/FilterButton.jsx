function FilterButton({text, value, setFil}){
    return(
        <button onClick={() => setFil(value)}>{text}</button>
    )
}

export default FilterButton