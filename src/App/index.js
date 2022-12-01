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
import { TodosError } from '../TodoError/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { EmptyTodos } from '../EmptyTodos'


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
        <TodoHeader loading={loading}>
          <TodoCounter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
          />    
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue = {setSearchValue}
          />
        </TodoHeader>


        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText = {searchValue}
          totalTodos ={totalTodos}
          onError = {() => <TodosError /> }
          onLoading = {() => <TodosLoading/>}
          onEmptyTodos = {() => <EmptyTodos />}
          onEmptySearchResults = {(searchText) => <p>No hay resultados {searchText}</p>}

          // render = {todo => (
          //   <TodoItem 
          //   key={todo.text} 
          //   text ={todo.text}
          //   completed = {todo.completed}
          //   onComplete ={() => completeTodo(todo.text)}
          //   onDelete ={() => deleTodo(todo.text)}
          //   />
          // )}
        >
          {todo => (
            <TodoItem 
            key={todo.text} 
            text ={todo.text}
            completed = {todo.completed}
            onComplete ={() => completeTodo(todo.text)}
            onDelete ={() => deleTodo(todo.text)}
            />
          )}
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