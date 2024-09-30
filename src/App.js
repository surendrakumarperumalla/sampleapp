
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries';
import Products from './features/products';

function App() {
  return (
    <div className='border border-danger'>
     <h1>APP</h1>
     <Counter></Counter>
     <Todolist></Todolist> 
     <Countries></Countries>
     <Products></Products>

    </div>
  );
}

export default App;
