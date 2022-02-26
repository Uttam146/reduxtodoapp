import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import "./todo.css";

const Todo = () => {
  const [inputData, setinputData] = useState('');
  const list = useSelector((state) => state.TodoReducers.list)
  const dispatch = useDispatch();
  return (
    <>
      <div className='main-div' style={{align:"center"}}>
        <div className='child-div'>
          <figure>
            <figcaption> Add your list here</figcaption>
          </figure>
          <div className='addItems'>
            <input type="text" placeholder='Add Items..' value={inputData}
              onChange={(event) => setinputData(event.target.value)} />
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setinputData(''))}></i>
          </div>
          <div>
            {list.map((elem) => {
              return (
              <div key={elem.id}>
                <h3>{elem.data}</h3>
                <div>
                <i title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}>Delete</i>
                </div>
              </div>
              )
            })
          }
          </div>
          {
            list.length > 0 &&
          <i onClick={() => dispatch(removeTodo(inputData))}>Delete all</i>
          }
        </div>
      </div>
    </>
  );
}

export default Todo;
