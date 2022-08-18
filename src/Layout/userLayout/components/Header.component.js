import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../../asset/images/istockphoto-1188700274-612x612-removebg-preview.png";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " dir="rtl">
      <div className="col-10 d-flex">
        <Image src={Logo} alt="" />
        <a className="navbar-brand mt-4" href="#">
          <h1>الکترونیک کالا</h1>{" "}
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse col-2" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              مدیریت <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <div className="d-flex">
              <a className="nav-link" href="#">
                سبد خرید
              </a>
              <i class="bi bi-basket-fill mt-2"></i>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
