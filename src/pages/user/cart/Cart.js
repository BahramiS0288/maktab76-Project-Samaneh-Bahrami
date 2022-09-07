import "./cartStyle.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from './feature/cartSlice';

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  // const handleDecreaseCart = (product) => {
  //   dispatch(decreaseCart(product));
  // };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
   
    <div className="cart-container">
      <h2>سبد خرید</h2>
      {cart.cartItem.length === 0 ? (
        <div className="cart-empty">
          <p>سبد خرید شما خالی است</p>
          <div className="start-shopping">
            <Link to="/">
            
              <span>رفتن به خرید</span>
              <i class="bi bi-arrow-left"></i>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">کالا</h3>
            <h3 className="price">قیمت</h3>
            <h3 className="quantity">تعداد</h3>
            <h3 className="total"></h3>
          </div>
          <div className="cart-items">
            {cart.cartItem &&
              cart.cartItem.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={`http://localhost:3002/files/${cartItem.thumbnail}`} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name.substring(0,13)}</h3>
                      <p>{cartItem.groupname}</p>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-price">{cartItem.cartQuantity}</div>
                  {/* <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div> */}
                  <div>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                        حذف
                      </button>
                  </div>
                  {/* <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div> */}
                </div>
              ))}
          </div>
          <div className="cart-summary">
            {/* <button className="clear-btn" onClick={() => handleClearCart()}>
              نهایی کردن سبد خرید
            </button> */}
            <button className="clear-btn" onClick={() => handleClearCart()}>
              پاک کردن سبد خرید
            </button>

            <div className="cart-checkout">
              <div className="subtotal">
                <span>جمع</span>
                <span className="amount">{cart.cartTotalAmount}</span>
              </div>
              <Link to='/cart/form'>
              <button>نهایی کردن سبد خرید</button>
              </Link>
              
              <div className="continue-shopping">
                <Link to="/">
                  
                  <span>ادامه خرید</span>
                  <i class="bi bi-arrow-left"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;