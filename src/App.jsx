import './App.css'
import TodoLogo from './components/header/TodoLogo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'
import { useTodos } from './hooks'

function App() {
  const {
    onSubmit,
    todos,
    toggleTodos,
    deleteTodos,
    allTodos,
    completedTodos,
  } = useTodos()

  return (
    <div className="App">
      <header>
        <TodoLogo>JS TodoList</TodoLogo>
      </header>

      <main>
        {/* 단점, inputValue가 계속해서 변하는데, 이 때 다른 자식들도 다 변한다.
        submit이 일어나면 그 떄 변해도 상관없는데...
        */}
        <TodoForm onSubmit={onSubmit} />
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
