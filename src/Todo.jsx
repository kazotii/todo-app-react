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
        activeFilter,
        text,
        counter
    } = useTodoLogic()
    return(
        <>
            <header>
                <div className="header-h1">
                    <h1>TODO</h1>
                </div>
                <div className="todo-starter">
                    <form className="starter-task" onSubmit={SetNewTodo} >
                        <input 
                        className="create-new-todo" 
                        placeholder="Create a new todo" 
                        onChange={(event) => setText(event.target.value)} 
                        value={text}>
                        </input>
                    </form>
                </div>
            </header>
            <main>
                <div className="todo-list">
                    <Item tasks={filteredTodos} deleteFunc={DeleteId} toggleFunc={ToggleId}/>
                </div>

                <div className="todo-condition">
                    <div className="todo-count">
                        <span className="todo-list-count">{counter} items left</span>
                    </div>
                    <div className="todo-condition-buttons">
                        <FilterButton text='All' value='All' setFil={setFilter} activeFilter={activeFilter}/>
                        <FilterButton text='Active' value='Active' setFil={setFilter} activeFilter={activeFilter}/>
                        <FilterButton text='Completed' value='Completed' setFil={setFilter} activeFilter={activeFilter}/>
                    </div>
                    <button className="clear-completed" onClick={ClearCompleted}>Clear completed</button>
                </div>
            </main>
        </>
    )
}

export default Todo