import { useMemo, useState } from 'react'

const MIN_LENGTH = 2
const MAX_LENGTH = 20

const lengthCheck = (inputLength) => {
  return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
}

export default function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '안녕1', completed: false },
    { id: 6, content: '지성님 바보', completed: false },
  ])

  const checkDuplicated = (findValue) =>
    todos.find((e) => e.content === findValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.querySelector('input').value
    if (lengthCheck(value.length) && !checkDuplicated(value)) {
      setTodos((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          content: value,
          completed: false,
        },
      ])
      e.target.reset()
    } else {
      alert('2자 이상 - 20자 이하로만 입력할 수 있습니다 or 이미 있습니다.')
    }
  }

  const toggleTodos = (id) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      })),
    )
  }

  const deleteTodos = (id) => {
    setTodos(todos.filter((e) => e.id !== id))
  }

  const allTodos = useMemo(() => todos.length, [todos])

  const completedTodos = useMemo(
    () => todos.filter((e) => e.completed).length,
    [todos],
  )

  return {
    todos,
    onSubmit: handleSubmit,
    toggleTodos,
    deleteTodos,
    allTodos,
    completedTodos,
  }
}
