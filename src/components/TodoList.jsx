import React from 'react'
import TodoButton from './TodoButton'

export default function TodoList({ todos, toggleTodos, deleteTodos }) {
  return (
    <ul>
      {todos.map(({ id, content, completed }) => (
        <li
          key={id}
          style={completed ? { textDecoration: 'line-through' } : {}}
        >
          <h2>{content}</h2>
          <TodoButton btnText="완료" onClick={toggleTodos} id={id} />
          <TodoButton btnText="삭제" onClick={deleteTodos} id={id} />
        </li>
      ))}
    </ul>
  )
}
