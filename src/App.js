import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import { useState } from 'react';

const todoStart = [
  {
    id:0,
    title: "Lage middag",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]

function App() {
  const [todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todoStart])
  const [id, setId] = useState(1)

  const addToDo = (event) =>{
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () => {
    setId((prev) => prev + 1)
    setTodos((prev) => [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }

  const removeToDos = (todoid) =>{
    setTodos(todos.filter((item) => item.id !== todoid))
  }

  console.log(todos)

  return (
    <>
    <Navbar username="sigurl" />
    <section className='container'>
      <Form handleClick={handleClick} addToDo={addToDo} todo={todo} />
    </section>
    <Todos todoStart={todos} removeToDos={removeToDos} />
    </>
  );
}

export default App;
