import React from 'react'
import {Form , Field} from "formik"
 //import { DatePicker } from "jalali-react-datepicker";

const FinalForm = ({errors,touched,isValid,dirty}) => {
  

  return (
    <Form className='container'>
   
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div className="row mb-4 ">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" for="form6Example1">نام</label>
        <Field name="firstName" type="text" id="form6Example1" className="form-control" />
        <small className='text-danger'>{touched.firstName ? errors.firstName  : ''}</small>
        
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" for="form6Example2">نام خانوادگی</label>
        <Field name="lastName" type="text" id="form6Example2" className="form-control" />
        <small className='text-danger'>{touched.lastName ? errors.lastName  : ''}</small>
      </div>
    </div>
  </div>
  {/* <!-- Number input --> */}
  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example6">تلفن همراه</label>
    <Field name="phone" type="number" id="form6Example6" className="form-control" />
    <small className='text-danger'>{touched.phone ? errors.phone  : ''}</small>
  </div>

  

  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example5">ایمیل</label>
    <Field name="email" type="email" id="form6Example5" className="form-control" />
    <small className='text-danger'>{touched.email ? errors.email  : ''}</small>
  </div>

  {/* <!-- Text input --> */}
  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example4">تاریخ تحویل</label>
    <Field name="deliverd" type="date" id="form6Example4" className="form-control" />
    <small className='text-danger'>{touched.deliverd ? errors.deliverd  : ''}</small>
  </div>

  {/* <!-- Message input --> */}
  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example7"> آدرس</label>
    <Field as="textarea" name="address" className="form-control" id="form6Example7" rows="4"></Field>
    <small className='text-danger'>{touched.address ? errors.address  : ''}</small>
  </div>


  {/* <!-- Submit button --> */}
  <a href="http://localhost:3001">
  <button type="submit" className="btn btn-success col-12 btn-block mb-4" 
  disabled={!isValid || !dirty}>پرداخت</button>
  </a>
  
</Form>
  )
}

export default FinalForm