import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './store/counter';
import Products from './store/products';
import Todo from './store/todo';
import Countries from './store/countries';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/todo",
        element:<Todo></Todo>,
    
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
    
      },
      {
        path: "/products",
        element:<Products></Products>
    
      },
      {
        path: "/countries",
        element:<Countries></Countries>
    
      },
    ]
  }, 
    ])
root.render(
      <Provider store={store}>
       <RouterProvider router={router} />
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
