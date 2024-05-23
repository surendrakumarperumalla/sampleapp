import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from "axios";
function Studentform(){
    var Studentform=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            password:"",
            username:""
        },
        validationSchema:yup.object({
            firstname:yup.string()
            .required("please fill the firstname")
            .max(9,"please check"),
            lastname:yup.string()
            .required("please fill the lastname")
            .max(5,"please check"),
            password:yup.string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"please check"),
            age:yup.number().test("checkage","age is not correct",(x)=>{
               
                if(x>18 && x>=35){
                    return true
                }
                else{
                    return false
                }
            }),
            username:yup.string().test("uniqueusername","username already in use",function(un){
                var {path,createError}=this;
                var p=new Promise((resolve,reject)=>{
                axios.get(`http://api.github.com/users/${un}`)
                .then((res)=>{
                    reject(createError({path,message:"already exists"}))
                })
                .catch(err=>{
                    resolve(true)
                })
          

            })
             return p     
        })
        }),
         onSubmit:(values)=>{
            console.log(values);
         }


    })

    return <div>
        <form  onSubmit={Studentform.handleSubmit}>
            <input type="text" {...Studentform.getFieldProps("firstname")} />
            <div>
                {Studentform.touched.firstname && Studentform.errors.firstname && <b>please fil firstname</b>}


            </div>
            <br/>
            <input type="text" {...Studentform.getFieldProps("lastname")}  />
            <br/>
            <input type="text" {...Studentform.getFieldProps("age")}  />
            <br/>
            <input type="text" {...Studentform.getFieldProps("password")}  />
            <br/>
            <input type="text" {...Studentform.getFieldProps("username")}  />
            <br/>
            <button>show data</button>
            <button onClick={()=>{Studentform.resetForm()}}> reset</button>

            <button onClick={()=>{Studentform.setValues({
                 firstname:"surendra",
                 lastname:"kumar",
                 age:"23",
                 password:"Mo@rlt342",
                 username:"suffuuhd"})}}>getdetails</button>
                 <button onClick={()=>{Studentform.setFieldValue("lastname","kohli")}}>getlastname</button>
           
        </form>
       { JSON.stringify(Studentform.errors)}
    </div>
}
export default Studentform