import logo from './logo.svg';
import './App.css';
import counter from './store/counter';
import todo from './store/todo';
import products from './store/products';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Header from './header';

function App(props) {
  console.log("props::",props)
  return (
 <div className="border border-2 border-danger m-2 p-2">
     <h1>
      {/* Cart:{props.productsReducer.cart.length} */}
      </h1>
      <Header></Header>
      {/* <li>
      <Link to="/todo">todolist</Link>
      </li>
        <li>
      <Link to="/counter">counter</Link>
      <li>
      <Link to="/products">products</Link>
      </li>
      </li> */}
      <Outlet></Outlet>
    </div>
  );
}

export default  connect(store=>store)(App);
