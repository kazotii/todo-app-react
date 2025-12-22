import TodoItem from "./TodoItem";

function Item({tasks, deleteFunc, toggleFunc}){
  return( 
    <ul className="ul-todo-list">
      {tasks.map((item) => (
        <TodoItem
        key={item.id}
        item={item}
        deleteFunc={deleteFunc}
        toggleFunc={toggleFunc}
        />
      ))}
    </ul>   
  )
}

export default Item