import Carousel from "react-bootstrap/Carousel";
import "./counterStyle.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  addQuantity
} from '../cart/feature/cartSlice';
 import { productFetch } from './feature/productSlice';



export function ProductOverview() {
  const params = useParams();
  //const [product, setProduct] = useState([]);
  const [countItem, setCountItem] = useState(0);
  const cartItem = useSelector((state) => state.cart.cartItem);
  // const countItem =useSelector((state) => state.cart.cartTotalQuantity);
  const productId = params.productOverviewId;
  const dispatch = useDispatch();
  const product=useSelector(state => state.products.items)

  // useEffect(() => {
  //   fetch(`http://localhost:3002/products?id=${productId}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);

  const handleDecreaseCart = (id) => {
    let item=axios.get(`http://localhost:3002/products?id=${id}`).then((res) => res.data);
    dispatch(decreaseCart(item));
  };
  
  

  useEffect(()=>{
    // console.log(productId);
    dispatch(productFetch(productId))
  },[])

  const handleChangeCountProduct = (e) => {
    //let QuantityProduct ={"id":id , "number" :e.target.value }
    // console.log(QuantityProduct.id);
    setCountItem(e.target.value);
    
    //dispatch(addQuantity(QuantityProduct))
  };

  const handleAddToCart = (product,countItem) => {
  
    let productItem = {...product, countItem:countItem}
    //axios.get(`http://localhost:3002/products?id=${id}`).then((res) => dispatch(addToCart(res.data[0])));
    dispatch(addToCart(productItem))
    
  };

  return (
    <>
    {/* {console.log(cartItem[5].cartQuantity)} */}
      {product.map((item) => {
        const { name, price, describtion, count, subgroupname, image,id } = item;

        return (
          <section className="py-5 ">
            <div className="container px-4 px-lg-5 my-5 ">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <ImageSlider slides={image} />
                </div>
                <div className="col-md-6">
                  <h1 className="display-5 fw-bolder">{name}</h1>
                  <div className="small mb-1 mx-4"> مدل : {subgroupname}</div>
                  <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through mx-4">
                      {Number(price + 20).toLocaleString()} ریال
                    </span>
                    <span>{Number(price).toLocaleString()} ریال</span>
                  </div>
                  <p className="lead">{describtion}</p>
                  <div className="d-flex">
                    <input className= "form-control text-center mx-2 me-3" id="inputQuantity" type="number" value={countItem} style={{maxWidth: "4rem"}} min='0' 
                    onChange={(e) => handleChangeCountProduct(e,item.id)}/>
                    
                     {/* <div className="cart-item">
                    <div className="cart-product-quantity ">
                      <button onClick={() => handleDecreaseCart(id)}>
                        -
                      </button>
                      <div className="count">{countItem}</div>
                      <button onClick={() => handleAddToCart(id)}>
                        +
                      </button>
                    </div>
                    </div> */}
                    <button
                      className={+count ?
                        "btn btn-outline-dark flex-shrink-0 mx-2 " :
                        "btn btn-outline-dark flex-shrink-0 mx-2 disabled"
                      }
                      type="button"
                      
                      onClick={() => handleAddToCart(item,countItem)}
                    >
                      <i className="bi-cart-fill me-1"></i>
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
