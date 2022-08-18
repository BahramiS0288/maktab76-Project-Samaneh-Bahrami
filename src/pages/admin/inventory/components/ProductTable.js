import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
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
 

const ProductTable = () => {
    const[products,setProducts]=useState([]);
    const[pageCount,setPageCount] = useState(0)
    const [idEditPrice, setIdEditPrice] = useState(-1)
    const [idEditCount, setIdEditCount] = useState(-1)
    const [priceEdite,setPriceEdite]=useState(0)
    
    const inputPriceRef = useRef([])

    const limit =4
    

    useEffect(() =>{
        const getOrder = async () =>{
            const res = await fetch(
                `http://localhost:4000/products?_page=1&_limit=${limit}`
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
            `http://localhost:4000/products?_page=${currentPage}&_limit=${limit}`
        )
        const data = await res.json();
        return data
     }
    
      const handlePageClick= async({selected})=>{
        let currentPage = selected +1 ;
        const dataOfServer = await fetchOrder(currentPage);
        setProducts(dataOfServer);
      }

      const handleChangePrice =async (e,id) =>{
         await fetch(
            `http://localhost:4000/products/${id}`,{
              method: 'PATCH',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({price : e.target.value})
          }
        )
        // const data = await res.json();
        // priceEdite = target.value
     }

     const handleChangeCount =async (e,id) =>{
        await fetch(
          `http://localhost:4000/products/${id}`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({count : e.target.value})
        }
      )
      // const data = await res.json();
      // priceEdite = target.value
   }


  return (
    <>
    
    <TableStyle>
      <thead>

        <tr>
            <th> کالا</th>
            <th> قیمت</th>
            <th>  موجودی</th>
            
        </tr>
      </thead>
      <tbody>

        {products.map((product , index)=>{
            const{id,name,price,count}=product
            return <tr key={id}>
                <td>{name}</td>

                <td>{ idEditPrice === index ? ( 
                  <input id='price' type="text" defaultValue={price} onChange={(event)=>handleChangePrice(event,id)}/>
                  //  setPriceEdite(...priceEdite,)
                ) :(
                  <p onClick={()=>setIdEditPrice(index)}>{price}</p>
                )}</td>

                <td>{idEditCount === index ? (
                  <input type="text" defaultValue={count} onChange={(event)=>handleChangeCount(event,id)}/>
                  // console.log(inputPriceRef.current.value)
                ) :(
                  <p onClick={()=>setIdEditCount(index)}>{count}</p>
                )
                }</td>
            </tr>
        })}
      </tbody>
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

export default ProductTable
