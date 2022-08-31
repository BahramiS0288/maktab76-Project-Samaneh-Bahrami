import { useState } from 'react'
import BuutonEditeProduct from './components/BuutonEditeProduct'
import ProductTable from './components/ProductTable'

export function Inventory(){
    const[refresh,setRefresh]=useState(false)
    

    return<div className='container'>
    
      <BuutonEditeProduct setRefresh={()=>setRefresh(true)} />
      <ProductTable refresh={refresh} setRefresh={()=>setRefresh(false)}
      />
    </div>
}