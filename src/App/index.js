import React from 'react';
import { useTodos} from './useTodos.js';
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from '../modal'
import { TodoForm } from '../TodoForm'
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'


function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    deleTodo,
    addTodo, 
   } 
    
    = useTodos();

    return (
      <React.Fragment>
        <TodoHeader>
          <TodoCounter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
          />    
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue = {setSearchValue}
          />
        </TodoHeader>
  
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
                <TodoForm 
                addTodo= {addTodo}
                setOpenModal= {setOpenModal}
                />
              </Modal>
            )}
        <CreateTodoButton 
          setOpenModal= {setOpenModal}
        />      
   </React.Fragment>
    );
}

export default App;