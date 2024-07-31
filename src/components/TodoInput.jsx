import React, { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props
//   const [todoValue, setTodoValue] = useState('')

  return (
    <header>
      <input
        type="text"
        placeholder='Enter Todo ...'
        value={todoValue} change
        onChange={(e) => setTodoValue(e.target.value)}  
      />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('') 
      }}>Add</button>
    </header>
  )
}
