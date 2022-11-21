import React from 'react'
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import './App.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleTodo,
}) {
  return (
    <React.Fragment>
    <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos}
    />    
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}    
    />
    <TodoList>
      {searchedTodos.map(todo =>(
      <TodoItem 
      key={todo.text} 
      text ={todo.text}
      completed = {todo.completed}
      onComplete ={() => completeTodo(todo.text)}
      onDelete ={() => deleTodo(todo.text)}
      />
      ))}
    </TodoList>
    <CreateTodoButton />      
 </React.Fragment>
  );
}

export { AppUI }