import React from 'react'
import './TodoButton.css';

const TodoButton = ( { setOpenModal } ) => {
  const onClick = () => setOpenModal(prevState => !prevState);

  return (
    <button 
    className='todobutton'
    onClick={onClick}
    >+
    </button>
  )
}

export {TodoButton};
