import React, { useEffect } from 'react'
import { useDeletePostMutation, useGetAllpostsQuery, useLazyGetAllpostsQuery } from '../services/postsAPI'
import { useNavigate } from 'react-router-dom';

function Posts() {
  var navigate=useNavigate()
  var{isLoading,data}=useGetAllpostsQuery();
  var[lazyGetallpostsFn]=useLazyGetAllpostsQuery()
  var[deletepostFn]=useDeletePostMutation()
  function deletepostHandler(id){
    deletepostFn(id).then((res)=>{
      lazyGetallpostsFn()
    })
    
  }
  function editpost(post){
    navigate("/editposts",{state:post})
    
  }
  useEffect(()=>{
   lazyGetallpostsFn()
  },[])
  
  return (
    <div>
      <h1>
       posts 
       {
        isLoading && (<h4>loading.......</h4>)
       }
       <ul>
        {
          !isLoading && (
            data?.map((p)=>{
              return<li>
               {p.title}
               {p.auther}
               <button onClick={()=>{deletepostHandler(p.id)}}>delete</button>
               <button onClick={(()=>{editpost(p)})}>edit</button>
              </li>
              
            })
          )
        }
       </ul>


      </h1>
    </div>
  )
}

export default Posts