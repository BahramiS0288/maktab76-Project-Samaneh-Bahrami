import ProductGroupTable from './components/ProductGroupTable'
import styled from 'styled-components'
import { useState } from 'react';
import ModalAddProduct from './components/ModalAddProduct';


export function ProductList(){
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [addedProduct,setAddedProduct] = useState(false)
  

    return(
    
    <div className='container'>
      {showModalAdd && (
        <ModalAddProduct
          show={showModalAdd}
          handleClose={() => setShowModalAdd(false)}
          setAddedProduct={setAddedProduct}
        />
      )}
      <div className="d-flex justify-content-between mt-5" dir="rtl">
          <h1>مدیریت کالا ها</h1>
          <button  className='btn btn-success px-4 py-2' onClick={() => setShowModalAdd(true)}> افزودن کالا</button>
      </div>
      <ProductGroupTable addedProduct={addedProduct}/>
    </div>)
}