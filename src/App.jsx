import './App.css'
import { useState } from 'react'
import TodoLogo from './components/header/TodoLogo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'

function App() {
  const [inputValue, setInputValue] = useState('')
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
    if (inputValue.length >= 2 && inputValue.length <= 20) {
      e.preventDefault()
      setTodos((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          todoList: inputValue,
          isCompleted: false,
        },
      ])
      setInputValue((prev) => '') // 다시 빈 값으로 만들어주기
    } else {
      alert('2자 이상 - 20자 이하로만 입력할 수 있습니다.')
    }
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
        {/* 단점, inputValue가 계속해서 변하는데, 이 때 다른 자식들도 다 변한다.
        submit이 일어나면 그 떄 변해도 상관없는데...
        */}
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
