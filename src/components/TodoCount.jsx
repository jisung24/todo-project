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
      <span>{allTodos(todos)}개</span>

      <p>completed</p>
      <span>{completedTodos(todos)}개</span>

      <p>not</p>
      <span>{unCompletedTodos(todos)}개</span>
    </>
  )
}
