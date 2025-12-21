import { useState } from "react"
import { useEffect } from "react"

function useTodoLogic(){
    const [text, setText] = useState("")
    const [filter, setFilter] = useState("")
    const [todo, setTodo] = useState(() => {
        const savedTodo = localStorage.getItem('todo')
        if(savedTodo){
            return JSON.parse(savedTodo)
        }
        return[]
    })
    
    function SetNewTodo(){
        const newTodo = {text: text, id: Date.now(), completed: false}
        setTodo([...todo, newTodo])
        setText("")
    }

    const counter = todo.filter((task) => task.completed === false).length
    let filteredTodos = todo
    switch(filter){
        case 'all':
            filteredTodos = todo
            break;
        case 'active':
            filteredTodos = todo.filter((task) => task.completed === false) 
            break;
        case 'completed':
            filteredTodos = todo.filter((task) => task.completed === true)
            break
    }
    
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    function ToggleId(id){
        setTodo(
            todo.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
                }
            })
        )
    }

    function DeleteId(id){
        setTodo(
            todo.filter((task) => 
                task.id !== id)
        )
    }

    function ClearCompleted(){
        setTodo(todo.filter((task) => task.completed === false))
    }
    return(
        {filteredTodos, DeleteId, ToggleId, SetNewTodo, setFilter, setText, ClearCompleted, text, counter}
    )
}

export default useTodoLogic