import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ nameGroup }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = () => {
      fetch(`http://localhost:3002/products?groupname=${nameGroup}&?_page=1&_limit=4`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchItem();
  }, []);

  //<div>{console.log(products)}</div>;
  return (
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.map((item) => {
        const { price, name, thumbnail,id } = item;
        return (
          <div class="col mb-5" onClick={() =>navigate(`/productOverview/${id}`)}>
                        <div class="card h-100">
                           
                            <img class="card-img-top" src={`http://localhost:3002/files/${thumbnail}`} alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">{name}</h5>
                                   
                                    {Number(price).toLocaleString()} ریال
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">دیدن محصول</a></div>
                            </div>
                        </div>
                    </div>
        );
      })}
     </div>
            </div>
        </section>
  );
};

export default ProductCard;
