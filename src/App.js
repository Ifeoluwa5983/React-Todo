import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import TodoLIst from './components/TodoLIst'

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all")
  const[filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed == false))
        break;  
      default:
        setFilteredTodos(todos)
        break;  
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ife's Todo List</h1>
      </header>
      <Form setStatus={setStatus} inputText= {inputText} todos = {todos} setTodos= {setTodos} setInputText= {setInputText}/>
      <TodoLIst setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
