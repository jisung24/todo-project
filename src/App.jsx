import './App.css'
import { useMemo, useState } from 'react'
import TodoLogo from './components/header/TodoLogo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'

const MIN_LENGTH = 2
const MAX_LENGTH = 20
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, content: '안녕1', completed: false },
    { id: 2, content: '안녕2', completed: false },
    { id: 3, content: '안녕3', completed: false },
    { id: 4, content: '안녕4', completed: false },
    { id: 5, content: '안녕5', completed: false },
  ])
  const handleInputChange = (e) => {
    setInputValue((prev) => e.target.value)
  }

  const checkLength = (inputLength) => {
    return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
  }

  const checkDuplicate = (findValue) => {
    return todos.find((e) => e.content === findValue)
  }
  const handleInputSubmit = (e) => {
    if (checkLength(inputValue.length) && !checkDuplicate(inputValue)) {
      e.preventDefault()
      setTodos((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          content: inputValue,
          completed: false,
        },
      ])
      setInputValue('')
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

  // 그냥 함수겉에 감싸는거야
  // 그냥 그 함수를 선언할 때 바로 감싸주면 됨
  // 즉, 값과 관련된 함수 => 매번 호출될 필요가 없음
  // 그 값과 관련된 변수가 변하는게 아니라면 호출 필요없어
  const allTodos = useMemo(() => todos.length)
  const completedTodos = useMemo(() => todos.filter((e) => e.completed).length)
  const unCompletedTodos = useMemo(() => {
    return todos.filter((e) => !e.completed).length
  })
  return (
    <div className="App">
      <header>
        <TodoLogo logoText="JS TodoList" />
      </header>

      <main>
        <TodoForm
          inputValue={inputValue}
          onChange={handleInputChange}
          onSubmit={handleInputSubmit}
        />
        <TodoList
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodos={deleteTodos}
        />

        <TodoCount
          allTodos={allTodos}
          completedTodos={completedTodos}
          unCompletedTodos={unCompletedTodos}
          todos={todos}
        />
      </main>
    </div>
  )
}

export default App
