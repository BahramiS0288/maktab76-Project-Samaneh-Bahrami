import ProductGroupTable from './components/ProductGroupTable'
import styled from 'styled-components'


export function ProductList(){
    return<div className='container'>
      <div className="d-flex justify-content-between" dir="rtl">
          <h1>مدیریت کالا ها</h1>
          <button  className='btn btn-success'> افزودن کالا</button>
      </div>
      <ProductGroupTable />
    </div>
}