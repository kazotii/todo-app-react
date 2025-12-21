import Item from "./Item";
import FilterButton from "./FilterButton";
import useTodoLogic from "./TodoLogic";

function Todo(){
    const {
        filteredTodos,
        DeleteId,
        ToggleId,
        ClearCompleted,
        SetNewTodo,
        setFilter,
        setText,
        text,
        counter
    } = useTodoLogic()
    return(
        <>
            <span>{counter} items left</span>
            <FilterButton text='all' value='all' setFil={setFilter}/>
            <FilterButton text='active' value='active' setFil={setFilter}/>
            <FilterButton text='completed' value='completed' setFil={setFilter}/>
            <button onClick={ClearCompleted}>Clear completed</button>
            <p>You typed: {text}</p>
            <input onChange={(event) => setText(event.target.value)} value={text}></input>
            <button onClick={(event) => SetNewTodo()}>Add todo!</button>
            <Item tasks={filteredTodos} deleteFunc={DeleteId} toggleFunc={ToggleId}/>
        </>
    )
}

export default Todo