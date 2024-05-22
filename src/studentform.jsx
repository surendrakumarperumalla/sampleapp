import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup';
function Studentform() {
    var studentform = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            password: '',
            age: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastname: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

            password: Yup.string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "please check").required("required"),
       
        age: Yup.number().test("checkage", "age is not correct", (x) => {
            console.log("inside custom validation :", x)
            if(x>18 && x<=35){
                return true
            }
            else{
                return false
            }
        })
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return <div>
        <form onSubmit={studentform.handleSubmit}>
            <input type="text" placeholder="firstname" className={studentform.touched.firstname && studentform.errors.firstname && "border border-danger"} {...studentform.getFieldProps("firstname")} />
            <div>
                {studentform.touched.firstname && studentform.errors.firstname && <b>please fill firstname</b>}
            </div>
            <br />
            <input type="text" placeholder="lastname" className={studentform.touched.lastname && studentform.errors.lastname && "border border-danger"} name="lastname" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                {studentform.touched.lastname && studentform.errors.lastname && <b>please fill lasstname</b>}
            </div>
            <br />
            <input type="text" placeholder="password" className={studentform.touched.password && studentform.errors.password && "border border-danger"} name="password" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                {studentform.touched.password && studentform.errors.password && <b>please fill password</b>}
            </div>
            <br />
            <input type="text" placeholder="age" className={studentform.touched.age && studentform.errors.age && "border border-danger"} name="age" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                {studentform.touched.age && studentform.errors.age && <b>please fill age</b>}
            </div>
            <br />

            <button className="btn btn-success">show data</button>
        </form>
        {JSON.stringify(studentform.errors)}

    </div>

}
export default Studentform