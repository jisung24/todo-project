import './App.css'
import { useMemo, useState, useEffect, useCallback } from 'react'
import TodoLogo from './components/header/TodoLogo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'
import { response } from './apis/response.js'

const MIN_LENGTH = 2
const MAX_LENGTH = 20
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const handleInputChange = (e) => {
    setInputValue((prev) => e.target.value)
  }

  const checkLength = useCallback((inputLength) => {
    return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
  }, [])

  const checkDuplicate = useCallback(
    (findValue) => {
      return todos.find((e) => e.title === findValue)
    },
    [todos],
  )
  const handleInputSubmit = (e) => {
    if (checkLength(inputValue.length) && !checkDuplicate(inputValue)) {
      e.preventDefault()
      setTodos((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          title: inputValue,
          completed: false,
        },
      ])
      setInputValue('')
    } else {
      alert('2자 이상 - 20자 이하로만 입력할 수 있습니다 or 이미 있습니다.')
    }
  }

  // 여기있는 함수들은 전부 재랜더링 되면 계속 재선언이 돼...!
  const toggleTodos = useCallback(
    (id) => {
      // todos를 의존성 배열로 추가를 안 하면,
      // 계속 저 dummy Data로 toggle을 해야 돼!
      // todos를 추가했으면, 그 추가된 todos도 toggle이 돼야 해..!
      const findTodoElement = todos.find((e) => e.id === id)
      findTodoElement.completed = !findTodoElement.completed
      setTodos((prev) => [...prev]) // []를 새로 씌워줘야, 배열 주소값이 바껴 값이 바뀌고, set이 호출된다
    },
    [todos],
  )

  const deleteTodos = useCallback(
    (id) => {
      const deletedElement = todos.filter((e) => e.id !== id)
      setTodos((prev) => [...deletedElement])
    },
    [todos],
  )

  // 그냥 함수겉에 감싸는거야
  // 그냥 그 함수를 선언할 때 바로 감싸주면 됨
  // 즉, 값과 관련된 함수 => 매번 호출될 필요가 없음
  // 그 값과 관련된 변수가 변하는게 아니라면 호출 필요없어
  const allTodos = useMemo(() => todos.length, [todos])
  const completedTodos = useMemo(
    () => todos.filter((e) => e.completed).length,
    [todos],
    // 만약 여기 함수를 넣어줬으면... 안 되는게
    // 함수에 useCallback이 없지않은이상 계속 재선언 돼서
    // 메모리가 계속 바껴...
    // 그래서 재랜더링 될 때 마다 아마 completedTodos가 호출이 될거야...!
  )
  const unCompletedTodos = useMemo(() => {
    return todos.filter((e) => !e.completed).length
  }, [todos])

  // 이 함수들이 전부 재랜더링 될 때 마다 계속 호출됨.
  // 함수도 객체라서, 함수이름에 계속 다른 주소값이 들어감.
  // 어차피 1번만 선언된 후에 계속 호출해서 쓰면 됨.
  // 다시 선언이 되어야 할 이유가 있나...?
  useEffect(() => {
    const fetchTodoAPI = async () => {
      const res = await response('/todos', {})
      setTodos((prev) => [...res])
    }
    fetchTodoAPI()
  }, [])
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
