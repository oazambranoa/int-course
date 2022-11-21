import React from "react";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar curso introductorio', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
// ]



function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);      
    })
  }


  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };


  const deleTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  };

  return (
    <AppUI 
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleTodo = {deleTodo}

    />
  );
}

export default App;
