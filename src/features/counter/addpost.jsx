import React from 'react'
import { useFormik } from 'formik'
import { useAddPostMutation } from '../../services/postsAPI'

function Addpost() {
    var[addpostfn]=useAddPostMutation()
    var postForm=useFormik({
        initialValues:{
            title:'',
            auther:''
        },
        onSubmit:(values)=>{
            addpostfn(values).then((res)=>{
                console.log(res);
            }).catch()
        }
        })

  return (
    <div>
        <h1>ADD POSTS</h1>
        <form onSubmit={postForm.handleSubmit}>
          <input placeholder='title' type="text" {...postForm.getFieldProps("title")} />
          <br></br>
          <input placeholder='auther' type="text" {...postForm.getFieldProps("auther")} />
          <br></br>
          <button>addpost</button>
        </form>

    </div>
  )
}

export default Addpost