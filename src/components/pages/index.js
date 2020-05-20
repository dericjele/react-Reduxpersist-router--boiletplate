import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import '../../styles/home.css'
import addTodo from "../../state/actions";

const Home = () => {
    const dispatch = useDispatch();
    const todosList = useSelector(state=>state.addTodoReducer);
    const [inputVal, setInputVal] = useState('');

    const onChangeHandler = (e) =>{
        setInputVal(e.target.value)
    };
    const submitHandler = (e) =>{
        dispatch(addTodo(inputVal));
        setInputVal("")
    };

    return (
        <div>
            <h1>My Todos</h1>
            <span><input className={'add-todo'} placeholder={'add todo'} value={inputVal} onChange={onChangeHandler}/></span>
            <span><input type={'button'} value={'Add'} onClick={submitHandler}/></span>

            {
                todosList.map(todo=>{
                    return(
                        <p key={todo}>{todo}</p>
                    )
                })
            }
        </div>
    )
};

export default Home
