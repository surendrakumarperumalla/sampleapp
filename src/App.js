import logo from './logo.svg';
import './App.css';
import Counter from './store/counter';
import Todos from './store/todo';
import Products from './store/products';
import { connect } from 'react-redux';

function App(props) {
  return (
 <div className="border border-2 border-danger m-2 p-2">
     <h1>
      Cart:{props.productsReducer.cart.length}
      </h1>
     <Counter></Counter>
     <Todos></Todos>
     <Products></Products>
    </div>
  );
}

export default  connect(store=>store)(App);
