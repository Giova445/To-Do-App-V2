import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { Toggle } from "../TodoDarkMode";
import {  keepTheme } from "../TodoDarkMode/theme";
import "./App.css"


function App() {
  const { error,
          loading,
          filterTodos,
          toggleCompleteTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          addTodo,
  }=useTodos();
  return (
    <>
        <TodoHeader>
            <TodoCounter 
                totalTodos={totalTodos} 
                completedTodos={completedTodos}
            />    
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>

        <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading />}
            {(!loading && !filterTodos.length) && <EmptyTodos/>}
            {filterTodos.map(todo=> (
            <TodoItem
                 key={todo.text}
                text={todo.text}
                complete={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                 />
                ))}
        </TodoList>
        {!!openModal && (
            <Modal>
                < TodoForm 
                  addTodo={addTodo}
                  setOpenModal={setOpenModal
                } />
                {/* <p>{filterTodos[0]?.text}</p> */}
            </Modal>
        )}
        <TodoButton  setOpenModal={setOpenModal} openModal={openModal}/>
        
        <Toggle keepTheme={keepTheme} Toggle={Toggle}></Toggle>
    </>
  );

}

export default App;
