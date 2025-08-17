import React, { useState } from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
  return (
    <form className="TodoForm">
        <input type="text" className="todo-input" onChange={(e) => setValue(e.target.value)} placeholder="What is today's task?"/>
        <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

export default TodoForm