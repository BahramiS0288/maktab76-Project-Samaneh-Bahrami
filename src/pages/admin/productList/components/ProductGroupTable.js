import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const TableStyle=styled.table` 
    border-collapse: collapse;
    width: 80%;
    direction: rtl;
    margin-top:100px;
    margin-left:80px;
    border-top:2px dashed #D6EEEE;
    border-bottom:2px dashed #D6EEEE;
  
  th, td {

    
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #D6EEEE;
  }
  `
 

const ProductGroupTable = () => {
    const[products,setProducts]=useState([]);
    const[pageCount,setPageCount] = useState(0)

    const limit =5

    useEffect(() =>{
        const getOrder = async () =>{
            const res = await fetch(
                `http://localhost:3001/products?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get('x-total-count')
            setPageCount(total/limit)
            setProducts(data)
        }

        getOrder()
    },[])

    const fetchOrder= async(currentPage)=>{
        const res = await fetch(
            `http://localhost:3001/products?_page=${currentPage}&_limit=${limit}`
        )
        const data = await res.json();
        return data
     }
    
      const handlePageClick= async({selected})=>{
        let currentPage = selected +1 ;
        const dataOfServer = await fetchOrder(currentPage);
        setProducts(dataOfServer);
      }

  return (
    <>
    
    <TableStyle>
        <tr>
            <th>تصویر</th>
            <th> نام کلا</th>
            <th> دسته بندی</th>
            <th >  </th>
            
        </tr>
        {products.map((product)=>{
            const{id,name,groupname,thumbnail}=product
            return <tr key={id}>
                <td>{thumbnail}</td>
                <td>{name}</td>
                <td>{groupname}</td>
                <td><a href="" className='px-2'> حذف </a>
                <a href="" className='px-2'> ویرایش </a></td>
            </tr>
        })}
    </TableStyle>

    <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center mt-5 pt-5'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        ></ReactPaginate>
    </>
  )
}

export default ProductGroupTable