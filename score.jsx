function Score() {
    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem('todo')
        if(savedScore){
            return JSON.parse(savedScore)
        }
        else{
            return[]}
    })
    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(score))
    }, [score])

    function clickCounter(){
        const plusScore = () => {
            setScore((score) => score + 1)
        }

    return(
        <>
        <button onClick={plusScore}></button>
        <span>{score} score</span>
        </>
    )
    }
}