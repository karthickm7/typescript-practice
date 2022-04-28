import "./App.css";
import Todos from "./Components/Todos";
import Todo from './Datamodels/Todo';

function App() {

  const todoss =[
    new Todo('continue react'),
    new Todo('learn tsx')

  ];
  return <>

   <Todos items={todoss}/>
  </>;
}

export default App;
