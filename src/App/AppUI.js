import React from 'react'
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from '../TodoContext';
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import './App.css';
import { Modal } from '../modal'
import { TodoForm } from '../TodoForm'

function AppUI() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo,
    openModal,
    setOpenModal,
    deleTodo} = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Hubo un error...</p>}
        {(!loading && searchedTodos.length) && <p>Crea tu primer TODO</p>}

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
        
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}


      <CreateTodoButton 
        setOpenModal= {setOpenModal}
      />      
 </React.Fragment>
  );
}

export { AppUI }