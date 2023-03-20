import React from 'react'
import './TodoList.css';

function TodoList(props) {
  return (
      <section className='todolist--container'>
        {props.error && props.onError()}
        
        
        {/* { (props.searchedTodos.length <= 0 && props.searchValue.length >= 1) && props.onSearchNoFound() } */}
        <h3>Today's tasks</h3>
        {props.loading && props.onLoading()}
        { (!props.loading && !props.searchedTodos.length && props.searchValue.length < 1) && props.onEmptyTodos() }
        <ul>
          { props.searchedTodos.map(todo => props.rendertodos(todo)) }
        </ul>
      </section>
  )
};

export {TodoList};
