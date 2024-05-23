import React from "react";
import { Field, Form, Formik } from "formik";
function Employeeform(){
    return<div>
        <h1>Employeeform</h1>
       <Formik 
       initialValues={{
        fullname:"",
        dob:"",
        place:""
       }}
       onSubmit={(values)=>{
        console.log(values)
       }}      
       >
        {/* {
            (empform)=>{
                return(
                    <form onSubmit={empform.handleSubmit}>
                        <input type="text" {...empform.getFieldProps("fullname")} />
                        <br/>
                        <input type="text" {...empform.getFieldProps("dob")} />
                        <br/>
                        <input type="text" {...empform.getFieldProps("place")} />
                        <br/>
                            <button>show</button>

                    </form>
                )
            }
        } */}
              <Form>
              <Field name="fullname" type="text"></Field>
              <br/>
              <Field name="dob" type="text"></Field>
              <br/>
              <Field name="place" type="text"></Field>
               <br/>
              <button >show</button>
              </Form>
             </Formik>
    </div>
}
export default Employeeform