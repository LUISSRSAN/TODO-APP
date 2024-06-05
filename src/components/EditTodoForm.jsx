
import React, {useState} from "react"
const  EditTodoForm = ({editTodo,task}) => {

const [value,setValue] = useState(task.task);

const handleSubmit = e => {
    e.preventDefault();
    editTodo(value,task.id);

    setValue("");
}

    return (        <form className="todo-form" onSubmit={handleSubmit}>
            
    <input type="text" value={value} className="todo-input" placeholder="Update Todo"
    onChange ={(e)=> setValue(e.target.value)}
    />
    <button type="submit" className="todo-btn">Edit</button>
    
    </form>)
}

export default EditTodoForm