import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import {useNavigate} from "react-router-dom"

const ProductCategories = () => {
    const[category,setCategory]=useState([])
    const navigate = useNavigate()


  

    useEffect(()=>{
        fetch(
            `http://localhost:3002/productsgroups`
          ).then((res)=> res.json())
          .then((data) => setCategory(data))

          
    },[])

    

  return (
    <div>
      {
category.map((item) => {
    const{groupname,iDgroupname} = item
    
    return <>
         <h1 class="display-1 mx-5 mt-3 primary" onClick={() =>navigate(`/category/${iDgroupname}`)}>{groupname}</h1>
        <ProductCard nameGroup={groupname} />
    </>
    
  })
  
      }
      
    </div>
  )
}

export default ProductCategories
