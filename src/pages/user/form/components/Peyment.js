import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import errorPic from "../../../../asset/images/peyments/error.png";
import successPic from "../../../../asset/images/peyments/success.png";
import { clearLocalstorage } from "../../cart/feature/cartSlice";

const Peyment = () => {
  const params = useParams();
  const query = params.query;
  const cartItemFinal = useSelector((state) => state.cart.cartItemFinal);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(query === ":success"){
        handleClearCart()
    }
  },[query])

  const handleClearCart = () => {
    console.log(cartItemFinal);
    fetch(`http://localhost:3002/orders`, {
      method: "POST",

      body: JSON.stringify(cartItemFinal),
    });

    dispatch(clearLocalstorage());
  };

  return (
    <div>
      {query === ":success" ? (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "180px" }}
        >
          <img
            src={successPic}
            alt=""
            style={{ width: "280px", height: "280px" }}
          />
          <p style={{ width: "250px", padding: "25px", fontSize: "30px" }}>
            با تشکر از خرید شما. سفارش شما ثبت شد.
          </p>
          <div
            style={{ width: "280px", height: "280px" }}
            onClick={handleClearCart}
          ></div>
        </div>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "180px" }}
        >
          <img
            src={errorPic}
            alt=""
            style={{ width: "280px", height: "280px" }}
          />
          <p
            style={{
              width: "250px",
              padding: "25px",
              marginTop: "40px",
              fontSize: "30px",
            }}
          >
            پرداخت موفقیت امیز نبود . سفارش شما در انتظار پرداخت است
          </p>
        </div>
      )}
    </div>
  );
};

export default Peyment;
