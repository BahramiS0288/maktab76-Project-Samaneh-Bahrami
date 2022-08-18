import React from 'react'


const Login = () => {
  return (
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
                <input type="email" id="typeEmailX" className="form-control form-control-lg" dir='rtl' placeholder='نام کاربری'/>
                
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" dir='rtl' placeholder=' رمز عبور'/>
                
              </div>


              <button className="btn btn-outline-light btn-lg px-5" type="submit">ورود</button>

              

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
  )
}

export default Login