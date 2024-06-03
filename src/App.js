
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries';

function App() {
  return (
    <div className='border border-danger'>
     <h1>APP</h1>
     <Countries></Countries>
     {/* <Counter></Counter>
     <Todolist></Todolist> */}
    </div>
  );
}

export default App;
