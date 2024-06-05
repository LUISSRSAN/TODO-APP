
import React, {useState} from "react"
const  TodoForm = ({addTodo}) => {

const [value,setValue] = useState("");

const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);

    setValue("");
}

    return (        <form className="todo-form" onSubmit={handleSubmit}>
            
    <input type="text" value={value} className="todo-input" placeholder="What to do?"
    onChange ={(e)=> setValue(e.target.value)}
    />
    <button type="submit" className="todo-btn">Add</button>
    
    </form>)
}

export default TodoForm