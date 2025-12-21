function TodoItem({item, deleteFunc, toggleFunc}) {
    return(
        <li>
          <input type="checkbox" checked={item.completed} onChange={() => {toggleFunc(item.id)}}/>
          <span>{item.text}</span>
          <button onClick={() => {deleteFunc(item.id)}}>X</button>
        </li>
    )
}
export default TodoItem