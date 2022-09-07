import React from 'react'
import {Form , Field} from "formik"

const finalForm = () => {
  return (
    <form className='container'>
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  <div className="row mb-4 ">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" for="form6Example1">نام</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" for="form6Example2">نام خانوادگی</label>
      </div>
    </div>
  </div>

  {/* <!-- Number input --> */}
  <div className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" />
    <label className="form-label" for="form6Example6">تلفن همراه</label>
  </div>

  

  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form6Example5" className="form-control" />
    <label className="form-label" for="form6Example5">ایمیل</label>
  </div>

  {/* <!-- Text input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" for="form6Example4">تاریخ تحویل</label>
  </div>

  {/* <!-- Message input --> */}
  <div className="form-outline mb-4">
    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
    <label className="form-label" for="form6Example7"> آدرس</label>
  </div>


  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
</form>
  )
}

export default finalForm