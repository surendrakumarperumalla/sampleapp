
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  var [product,setProduct]=useState([])
  var[details,setDetails]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        setProduct(res.data)    
    },[])
  })
  function expand(id){
    setDetails(id)
  }
 return (
    <div className="App">
     {
      product?.map((p)=>{
        return<div >
        <li className='bg-dark text-light m-2 p-2 k'>
          <div className='d-flex justify-content-between'>
          {p.title}
          <i class="bi bi-plus-circle"  onClick={()=>{expand(p.id)}}></i>
          <i class="bi bi-dash-circle" onClick={()=>{}}></i>
          </div>

        <h1 style={p.id===details?{display:"block"}:{display:"none"}}>
          DETAILS <br />
          <img  src={p.image} className='w-25'/>
        </h1> 
             </li>
    </div>
      })
    }
    </div>
  );
}

export default App;
