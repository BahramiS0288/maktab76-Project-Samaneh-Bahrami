import React from 'react'
import { Formik } from "formik";
import Form from "./components/FormLogin";
import * as Yup from "yup";

const validate = () => {
    const Errorschema = Yup.object().shape({
        firstName: Yup.string()
          .required("نام را وارد کنید")
          .min(3, "نام باید بیشتر از سه حرف باشد")
          .max(15, "نام باید کمتر از 15 حرف باشد"),
        lastName: Yup.string()
          .required("نام خانوادگی را وارد کنید")
          .min(3, "نام خانوادگی باید بیشتر از سه حرف باشد")
          .max(15, "نام خانوادگی باید کمتر از 15 حرف باشد"),
        phone: Yup.string()
        .matches(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          "نامعتبر"
        )
        .required("Required"),
        email: Yup.string().email("نامعتبر").required("ایمیل را وارد کنید"),
        address: Yup.string()
        .min(5, "خیلی کوتاه")
        .max(100, "خیلی بلند")
        .required("آدرس را وارد کنید"),
      });

      const handleSubmit =() =>{

      }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName:"",
        phone: "",
        email: "",
        deliverd :"",
        address :""
      }}
      onSubmit={(value) => {
         handleSubmit(value);
        console.log(value);
      }}
      validationSchema={Errorschema}
      component={Form}
    />
  )
}

export default validate






  

  
