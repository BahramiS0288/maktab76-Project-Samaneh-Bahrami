import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductCategories = () => {
    const[category,setCategory]=useState([])
    
let arr=[]

  

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
    const{groupname} = item
    arr.push(groupname)
    
    return <>
        <a href="" className='text-decoration-none'> <h1 class="display-1 mx-5 mt-3">{groupname}</h1></a>
        <ProductCard nameGroup={groupname} />
    </>
    
  })
  
      }
      
    </div>
  )
}

export default ProductCategories
