import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todolist from './features/todolist/todolist';
import Counter from './features/counter/counter';
import Countries from './features/countries';
import Products from './features/products';
import Posts from './features/posts';
import Addpost from './features/counter/addpost';
import Editpost from './features/counter/editpost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/todolist",
        element:<Todolist></Todolist>
      },
      {
        path:"/counter",
        element:<Counter></Counter>
      },
      {
        path:"/country",
        element:<Countries></Countries>
      },
      {
        path:"/product",
        element:<Products></Products>
      },
      {
        path:"/posts",
        element:<Posts></Posts>
      },
      {
        path:"/addposts",
        element:<Addpost></Addpost>
      }, 
      {
        path:"/editposts",
        element:<Editpost></Editpost>
      }, 
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
  </Provider>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
