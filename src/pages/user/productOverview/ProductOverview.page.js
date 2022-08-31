import Carousel from 'react-bootstrap/Carousel';

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ImageSlider from './components/ImageSlider'




export function ProductOverview(){
  const params = useParams()
  const [product , setProduct] = useState([])
  const productId = params.productOverviewId
  

  useEffect(()=>{
    fetch(
        `http://localhost:3002/products?id=${productId}`
      ).then((res)=> res.json())
      .then((data) => setProduct(data))

      
},[])

    return<>
      {
        product.map((item) =>{
          const{name,price,describtion,count,subgroupname,image}=item
          
          return(
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                    
                    <ImageSlider slides={image} /> 
                
                      </div>
                    <div className="col-md-6">
                        <div className="small mb-1"> مدل :  {subgroupname}</div>
                        <h1 className="display-5 fw-bolder">{name}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through mx-4">{Number(price+20).toLocaleString()}  ریال</span>
                            <span>{Number(price).toLocaleString()}  ریال</span>
                        </div>
                        <p className="lead">{describtion}</p>
                        <div className="d-flex">
                            <input className="form-control text-center mx-2 me-3" id="inputQuantity" type="num" value={count} style={{maxWidth: "3rem"}} />
                            <button className={`btn btn-outline-dark flex-shrink-0 mx-2 ${count ? null : "disabled"}`} type="button">
                                <i className="bi-cart-fill me-1"></i>
                                 افزودن به سبد خرید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          )
        })
      }
    </>
}