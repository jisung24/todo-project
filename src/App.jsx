import './App.css'
import { useState } from 'react'
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
    // 같은게 있는지 1개 찾는거...!
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
      setInputValue((prev) => '') // 다시 빈 값으로 만들어주기
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

  const allTodos = (todos) => {
    return todos.length
  }

  const completedTodos = (todos) => {
    const completed = todos.filter((e) => e.completed)
    return completed.length
  }

  const unCompletedTodos = (todos) => {
    const unCompleted = todos.filter((e) => !e.completed)
    return unCompleted.length
  }
  return (
    <div className="App">
      <header>
        <TodoLogo logoText="JS TodoList" />
      </header>

      <main>
        {/*
        단점, inputValue가 계속해서 변하는데, 이 때 다른 자식들도 다 변한다.
        부모의 상태가 변하면 자식의 state도 다시 호출되기 때문이다.
        근데 onChange와 onSubmit타이밍만 늦춰주면 될 것 같다.
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
