import styled from "styled-components";
import Logo from "./../../../asset/images/istockphoto-1188700274-612x612-removebg-preview.png";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export function Header() {
  // return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light container px-4 px-lg5" dir="rtl">
  //     <div className="col-10 d-flex">
        // <a className="navbar-brand" href="/">
        // <Image  src={Logo} alt=""  />
        // </a>
        
  //       <a className="navbar-brand mt-4" href="/">
  //         <h4>الکترونیک کالا</h4>
  //       </a>
  //     </div>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse col-2" id="navbarNav">
  //       <ul className="navbar-nav ">
  //         <li className="nav-item active">
  //           <a className="nav-link" href="/admin">
  //             مدیریت <span className="sr-only"></span>
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <div className="d-flex">
  //             <a className="nav-link" href="#">
  //               سبد خرید
  //             </a>
  //             <i class="bi bi-basket-fill mt-2"></i>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );

  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light " >
            <div class="container px-4 px-lg-5 ">
            <a className="navbar-brand" href="/">
        <Image  src={Logo} alt="" style={{height:"56px"}} />
        </a>
                <a class="navbar-brand" href="#!">الکترونیک کالا</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/login">مدیریت</a></li>
                        {/* <li class="nav-item"><a class="nav-link" href="#!">About</a></li> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <form class="d-flex" dir="ltr">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            سبدخرید
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  )
}
