
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries';
import Products from './features/products';
import Posts from './features/posts';
import { Outlet } from 'react-router-dom';
import Header from './features/shared/header';
function App() {
  return (
    <div className='border border-danger'>
     <h1>APP</h1>
     <Header></Header>
     <Outlet></Outlet>
    {/* { <Posts></Posts>} */}
     {/* <Countries></Countries>
      <Counter></Counter>
     <Todolist></Todolist> 
     <Products></Products> */}

    </div>
  );
}

export default App;
