import { useState } from "react";
import "./App.css";
import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";
import Todo from './Datamodels/Todo';


function App() {

  const [todoss,setTodoss] = useState<Todo[]>([]);


  const onDeleteHandler=(todoid:string)=>{
    setTodoss((prevtodo)=>{
         return prevtodo.filter(todo=> todo.id !== todoid)
    });

  }

  const addTodoHandler =(todoText:string)=>{
        const newtodo=new Todo(todoText);

        setTodoss((prevtodo)=>{
          return prevtodo.concat(newtodo)
        })
        }
  
  return <>
   <Todoform onAddTodo={( addTodoHandler)}/>
   <Todos items={todoss} onDelete={onDeleteHandler}/>
  
  </>;
}

export default App;
