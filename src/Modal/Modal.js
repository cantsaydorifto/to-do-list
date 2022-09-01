import React, { Fragment as Wrapper, useState } from "react";
import './Modal.css'

const Modal = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const changeHandler = event => {
        setEnteredTask(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const taskObj = {
            task: enteredTask,
            id: `t-${Math.random() * 10}`
        }
        props.addElem(taskObj);
        setEnteredTask('');
        props.fun();
    }

    const modalDivFun = (event) => {
        if (event.target === event.currentTarget) {
            props.fun();
        }
    }

    return (
        <Wrapper>
            <div onClick={modalDivFun} className="modalDiv">
                <div onClick={props.onFun} className="modalContent">
                    <form onSubmit={submitHandler}>
                        <div className="modalHeader">
                            <label htmlFor="task-text">Enter the task</label>
                        </div>
                        <input onChange={changeHandler} value={enteredTask} id='task-text' type="text" />
                        <button className="addButton">Add</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Modal;