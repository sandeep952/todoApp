import React from 'react'
import Todo from './Todo';

const Todos = (props)=>{
    return (
        <div>
        <Todo title ="Learn algorithms" id={1}/>
        <Todo title ="Learn algorithms" id={2}/>
        <Todo title ="Learn algorithms" id={3}/>
        <Todo title ="Learn algorithms" id={4}/>
    
        </div>
    )
}

export default Todos;