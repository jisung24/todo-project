import './App.css'
import { useRef, useState } from 'react'
import Button from './components/atoms/Button'
import TodoLogo from './components/header/TodoLogo'

function App() {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)
  const [todos, setTodos] = useState([
    { id: 1, todoList: '안녕1', isCompleted: false },
    { id: 2, todoList: '안녕2', isCompleted: false },
    { id: 3, todoList: '안녕3', isCompleted: false },
    { id: 4, todoList: '안녕4', isCompleted: false },
    { id: 5, todoList: '안녕5', isCompleted: false },
  ])
  const handleInputChange = (e) => {
    setInputValue((prev) => e.target.value)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    setTodos((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        todoList: inputValue,
        isCompleted: false,
      },
    ])
  }

  const toggleTodos = (id) => {
    const findTodoElement = todos.find((e) => e.id === id)
    findTodoElement.isCompleted = !findTodoElement.isCompleted
    setTodos((prev) => [...prev]) // []를 새로 씌워줘야, 배열 주소값이 바껴 값이 바뀌고, set이 호출된다
  }

  const deleteTodos = (id) => {
    const deletedElement = todos.filter((e) => e.id !== id)
    setTodos((prev) => [...deletedElement])
  }

  const allTodos = (todos) => {
    return todos.length
  }

  const completedTodos = (todos) => {
    const completed = todos.filter((e) => e.isCompleted)
    return completed.length
  }

  const unCompletedTodos = (todos) => {
    const unCompleted = todos.filter((e) => !e.isCompleted)
    return unCompleted.length
  }
  return (
    <div className="App">
      <header>
        <TodoLogo logoText="JS TodoList" />
      </header>

      <main>
        <form onSubmit={handleInputSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button>제출!</button>
        </form>

        <ul>
          {todos.map(({ id, todoList, isCompleted }) => (
            <li
              key={id}
              style={isCompleted ? { textDecoration: 'line-through' } : {}}
            >
              <h2>{todoList}</h2>
              <Button text="수정" onClick={toggleTodos} id={id} />
              <Button text="삭제" onClick={deleteTodos} id={id} />
            </li>
          ))}
        </ul>

        <p>all</p>
        <span>{allTodos(todos)}개</span>

        <p>completed</p>
        <span>{completedTodos(todos)}개</span>

        <p>not</p>
        <span>{unCompletedTodos(todos)}개</span>
      </main>
    </div>
  )
}

export default App
