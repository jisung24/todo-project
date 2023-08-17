import React from 'react'

export default function TodoCount({ allTodos, completedTodos }) {
  return (
    <>
      <p>all</p>
      <span>{allTodos}개</span>

      <p>completed</p>
      <span>{completedTodos}개</span>

      <p>not</p>
      <span>{allTodos - completedTodos}개</span>
    </>
  )
}
