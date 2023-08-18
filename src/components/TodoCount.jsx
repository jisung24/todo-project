import React from 'react'

export default function TodoCount({
  allTodos,
  completedTodos,
  unCompletedTodos,
  todos,
}) {
  return (
    <>
      <p>all</p>
      <span>{allTodos}개</span>

      <p>completed</p>
      <span>{completedTodos}개</span>

      <p>not</p>
      <span>{unCompletedTodos}개</span>
    </>
  )
}
