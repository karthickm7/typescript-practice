import React from 'react';
import classes from './Todoitem.module.css'
const Todoitem: React.FC<{text: string; onDelete:(e:React.MouseEvent) => void}> = (props) => {
  return<li className={classes.item} onClick={props.onDelete}>{props.text}</li>;
};
export default Todoitem;
