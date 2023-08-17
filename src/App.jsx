import './App.css'
import { useMemo, useState } from 'react'
import TodoLogo from './components/header/TodoLogo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'

const MIN_LENGTH = 2
const MAX_LENGTH = 20

const lengthCheck = (inputLength) => {
  return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
}

function App() {
  console.log('나 언제 렌더링 될까?')

  const [todos, setTodos] = useState([
    { id: 1, content: '안녕1', completed: false },
    { id: 6, content: '지성님 바보', completed: false },
  ])

  const checkDuplicated = (findValue) =>
    todos.find((e) => e.content === findValue)

  const handleInputSubmit = (e) => {
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
    const findTodoElement = todos.find((e) => e.id === id)
    findTodoElement.completed = !findTodoElement.completed
    setTodos((prev) => [...prev]) // []를 새로 씌워줘야, 배열 주소값이 바껴 값이 바뀌고, set이 호출된다
  }

  const deleteTodos = (id) => {
    const deletedElement = todos.filter((e) => e.id !== id)
    setTodos((prev) => [...deletedElement])
  }

  const allTodos = useMemo(() => {
    return todos.length
  }, [todos])

  const completedTodos = useMemo(() => {
    const completed = todos.filter((e) => e.completed)
    return completed.length
  }, [todos])

  return (
    <div className="App">
      <header>
        <TodoLogo>JS TodoList</TodoLogo>
      </header>

      <main>
        {/* 단점, inputValue가 계속해서 변하는데, 이 때 다른 자식들도 다 변한다.
        submit이 일어나면 그 떄 변해도 상관없는데...
        */}
        <TodoForm onSubmit={handleInputSubmit} />

        <TodoList
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodos={deleteTodos}
        />

        <div className="todoBottom">
          <TodoCount allTodos={allTodos} completedTodos={completedTodos} />
        </div>
      </main>
    </div>
  )
}

export default App
