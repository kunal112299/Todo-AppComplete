import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) { // Added destructuring to get todos prop

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <div key={todoIndex}>
            <TodoCard 
                handleEditTodo = {handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
                index = {todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          </div>
        )
      })}
    </ul>
  )
}
