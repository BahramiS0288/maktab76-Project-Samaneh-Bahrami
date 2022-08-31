import React,{useContext} from 'react'
import {Form , Field} from "formik"
import { useNavigate } from 'react-router-dom';
import  AuthContext from "./AuthProvider"

const FormLogin = ({errors,touched}) => {
  const {setAuth} =useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <Form >
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">ورود به پنل مدیریت </h2>
              <p className="text-white-50 mb-5 mt-4">لطفا نام کاربری و رمز عبور را وارد کنید</p>

              <div className="form-outline form-white mb-4">
                <Field name="username" type="text" id="typeEmailX" className={`form-control form-control-lg `} dir='rtl' placeholder='نام کاربری'/>
                <small className='text-danger'>{touched.username ? errors.username : ''}</small>
                
              </div>

              <div className="form-outline form-white mb-4">
                <Field name="password" type="password" id="typePasswordX" className="form-control form-control-lg" dir='rtl' placeholder=' رمز عبور'/>
                <small className='text-danger'>{touched.password ? errors.password : ''}</small>
              </div>


              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={()=> navigate('/admin/product')}>ورود</button>

              

            </div>

            <div>
               <a href="/" className="text-white-50 fw-bold text-decoration-none">بازگشت به سایت</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</Form>
  )
}

export default FormLogin