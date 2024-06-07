import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useAddPostMutation, useUpdatePostMutation } from '../../services/postsAPI'
import { useLocation, useNavigate } from 'react-router-dom'

function Editpost() {
  var {state}=useLocation();
  var navigate =useNavigate();
  useEffect(()=>{
    editpostForm.setValues(state)
  },[state])
  var [updatepostFn]=useUpdatePostMutation();
    var editpostForm=useFormik({
        initialValues:{
            title:'',
            auther:''
        },
        onSubmit:(values)=>{
           updatepostFn(values).then((res)=>{
            navigate("/posts")
           })
        }
        })

  return (
    <div>
        <h1>EDIT POSTS</h1>
        <form onSubmit={editpostForm.handleSubmit}>
          <input placeholder='title' type="text" {...editpostForm.getFieldProps("title")} />
          <br></br>
          <input placeholder='auther' type="text" {...editpostForm.getFieldProps("auther")} />
          <br></br>
          <button>update post</button>
        </form>

    </div>
  )
}

export default Editpost