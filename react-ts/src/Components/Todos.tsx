import React from "react";
import Todo from '../Datamodels/Todo';
import Todoitem from "./Todoitem";
import classes from '../Components/Todos.module.css'

const Todos: React.FC<{ items:Todo[]; onDelete:(id:string)=> void}> = (props) => {
  return (
    <ul className={classes.list}>
    {props.items.map((item)=>{
        return( <Todoitem key ={item.id}text={item.text} onDelete={props.onDelete.bind(null,item.id)}/>)
       
    })}
    </ul>
  );
};
export default Todos;
