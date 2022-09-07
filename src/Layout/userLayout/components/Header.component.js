import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../../asset/images/istockphoto-1188700274-612x612-removebg-preview.png";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export function Header() {
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
    const navigate = useNavigate()

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
                        <button class="btn btn-outline-dark" type="submit" onClick={() => navigate("/cart")}>
                            <i class="bi-cart-fill me-1"></i>
                            سبدخرید
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cartTotalQuantity}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  )
}
