import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddToDo/AddToDo';
import ListTodo from './components/ListTodo/ListTodo';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

const [todo, setTodo] = useState([
  {
  id:1,
  status: true,
  title:'first todo'
  },
  {
  id:2,
  status: true,
  title:'second todo'
  },
  {
  id:3,
  status: false,
  title:'third todo'
  }
])
console.log(todo);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo}/>
      <ListTodo todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
