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

  const toggleTodos = (id) => {
    const findTodoElement = todos.find((e) => e.id === id)
    findTodoElement.isCompleted = !findTodoElement.isCompleted
    setTodos((prev) => [...prev]) // []를 새로 씌워줘야, 배열 주소값이 바껴 값이 바뀌고, set이 호출된다
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
              <button
                onClick={() => {
                  toggleTodos(id)
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  deleteTodos(id)
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
