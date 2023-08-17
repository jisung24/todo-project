import React from 'react'
import TodoButton from './TodoButton'

export default function TodoList({ todos, toggleTodos, deleteTodos }) {
  return (
    <ul>
      {todos.map(({ id, todoList, isCompleted }) => (
        <li
          key={id}
          style={isCompleted ? { textDecoration: 'line-through' } : {}}
        >
          <h2>{todoList}</h2>
          <TodoButton btnText="수정" onClick={toggleTodos} id={id} />
          <TodoButton btnText="삭제" onClick={deleteTodos} id={id} />
        </li>
      ))}
    </ul>
  )
}
