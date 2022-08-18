import ProductGroupTable from './components/ProductGroupTable'
import styled from 'styled-components'


export function ProductList(){
    return<div className='container'>
      <div className="d-flex justify-content-between mt-5" dir="rtl">
          <h1>مدیریت کالا ها</h1>
          <button  className='btn btn-success px-4 py-2'> افزودن کالا</button>
      </div>
      <ProductGroupTable />
    </div>
}