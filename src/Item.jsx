import TodoItem from "./TodoItem";

function Item({tasks, deleteFunc, toggleFunc}){
  return( 
    <ul>
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