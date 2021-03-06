import { useRef } from "react";
import classes from './Todoform.module.css';


const Todoform:React.FC <{onAddTodo: (text: string) => void }>= (props)=>{
    const todoInputRef=useRef<HTMLInputElement>(null);

  const handleSubmit=(e:React.FormEvent)=>{
      e.preventDefault()
      const enteredtext =todoInputRef.current!.value;

      if(enteredtext.trim().length===0){
          return
      }

    props.onAddTodo(enteredtext)


  };
    return(
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.inputContainer}>
            <label htmlFor="text">Enter your ToDo</label>
            <input type='text' id='text' ref={todoInputRef}/>
            </div>
            <div className={classes.button}>
            <button id="btn">Add Todo</button>
            </div>
        </form>

    )
}
export default Todoform;