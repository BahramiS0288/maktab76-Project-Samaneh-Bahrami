import React from 'react'
import { Formik } from 'formik'
import Form from './components/FormLogin'
import * as Yup from "yup"

const Login = () => {
  const Errorschema = Yup.object().shape({
    username:Yup.string().required("نام کاربری را وارد کنید").min(3,"نام کاربری باید بیشتر از سه حرف باشد").
    max(15,"نام کاربری باید کمتر از 15 حرف باشد"),
    password:Yup.string().required("رمز عبور را وارد کنید").min(3,"رمز عبور باید بیشتر از سه حرف باشد").max(10,"رمز عبور باید کمتر از ده حرف باشد")

  })
  return (
    <Formik 
       initialValues={{
          username:'',
          password:''
       }}
       onSubmit={(value) =>{
        console.log(value);
       }}
       validationSchema={Errorschema}
    component={Form} />
  )
}

export default Login