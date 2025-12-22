function TodoItem({item, deleteFunc, toggleFunc}) {
    return(
        <li className={`li-todo-list ${item.completed ? 'li-completed' : ''}`}>
          <input type="checkbox" checked={item.completed} onChange={() => {toggleFunc(item.id)}}/>
          <span>{item.text}</span>
          <button className="delete-button" onClick={() => {deleteFunc(item.id)}}><span>x</span></button>
        </li>
    )
}
export default TodoItem