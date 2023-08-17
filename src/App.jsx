import './App.css'
import { useRef, useState } from 'react'

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
  return (
    <div className="App">
      <header>
        <h2>
          <span>JS TodoList</span>
        </h2>
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
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
