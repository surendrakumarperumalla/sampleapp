import React from 'react'
import { useGetAllproductsQuery, useLazyGetAllproductsQuery } from '../services/products'
import { useState } from 'react'

function Products() {
    var {isLoading,data}=useGetAllproductsQuery();
    console.log("Loading",isLoading);
    console.log("data",data);
    var [isLoading,setIsLoading]=useState(true);
    var [data,setData]=useState({})
    var[getAllprodfn]= useLazyGetAllproductsQuery();
    function getproducts(){
        getAllprodfn().then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
    }
  return (
       <div class="border border-danger">
    <h1>PRODUCTS</h1>
         <button onClick={()=>{getproducts()}}>load data</button>
    {isLoading && <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> }
        <ol className='d-flex flex-wrap'>
            {isLoading===false && (
                data.map((pro)=>{
                    return <li className='w-25 border border-2 border-primary bg-success p-1 m-2'>
                       <h4>TITLE:{pro.title}</h4>
                      <img src={pro.image} alt="" width="40%"/><br />
                       <br/>
                       <b>PRICE:{pro.price}</b>
                       <br/>
                        </li>
                })
            )
                
            }
        </ol>

 </div>
    
    
  )
}

export default Products