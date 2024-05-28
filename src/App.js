import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div >
     <h1>App</h1>
    <ul>
      <li><Link to='ch'>black</Link></li>
      <li> <Link to='st'>pink</Link></li>
    </ul>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
