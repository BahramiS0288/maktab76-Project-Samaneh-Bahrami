import React from 'react'
import { Formik } from "formik";
import FinalForm from '../FinalForm';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const validate = () => {
  const item = useSelector((state) => state.cart.cartItem)

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
        .required("شماره همراه را وارد کنید"),
        email: Yup.string().email("نامعتبر").required("ایمیل را وارد کنید"),
        address: Yup.string()
        .min(5, "خیلی کوتاه")
        .max(100, "خیلی بلند")
        .required("آدرس را وارد کنید"),
        deliverd :Yup.date().label("تاریخ تحویل").required("تاریخ تحویل را وارد کنید"),
      });


     

      let order = {"id":0,
      "name": "",
      "phone": "",
      "deliveryTime": "",
      "sumBuying": "",
      "tahvil": "",
      "status": true,
      "address": "",
      "product": []}

      const handleSubmit =  (value) => {
        // e.preventDefault();
        console.log(item);


      };

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
      onSubmit={(value,{resetForm}) => {
        handleSubmit(value);
        resetForm()
     }}
      validationSchema={Errorschema}
      component={FinalForm}
    />
  )
}

export default validate






  

  
