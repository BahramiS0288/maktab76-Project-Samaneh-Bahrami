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
 

const Table = ({changeModal,changeModalTahvil,IsTahvil}) => {
    const[orders,setOrders]=useState([]);
    const[pageCount,setPageCount] = useState(0)
    const [productsOrder,setProductsOrder] = useState([])
    let f =[]

    const limit =4

    useEffect(() =>{
        const getOrder = async () =>{
            const res = await fetch(
                `http://localhost:3001/orders?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get('x-total-count')
            setPageCount(total/limit)
            setOrders(data)
        }

        getOrder()
    },[])

    const fetchOrder= async(currentPage)=>{
        const res = await fetch(
            `http://localhost:3001/orders?_page=${currentPage}&_limit=${limit}`
        )
        const data = await res.json();
        return data
     }
    
      const handlePageClick= async({selected})=>{
        let currentPage = selected +1 ;
        const dataOfServer = await fetchOrder(currentPage);
        setOrders(dataOfServer);
      }
      const getOrderList = (id) =>{
        fetch(
            `http://localhost:3001/orders/${id}`
        ).then((res)=>res.json())
        .then((data) => {setProductsOrder(data)
        f=data
        console.log(f);})
        
        
        
    }
  const handleClick =(id) =>{
    getOrderList(id)
    console.log(productsOrder);
    
    if(IsTahvil){
      changeModalTahvil(true)
    }else{
      changeModal(true)
    }
    
  }

  return (
    <>
    
    <TableStyle>
    
        <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت سفارش  </th>
            
        </tr>
        
        {
        orders.map((order)=>{
            const{id,name,sumBuying,deliveryTime}=order
            return <tr key={id}>
                <td>{name}</td>
                <td>{sumBuying}</td>
                <td>{deliveryTime}</td>
                <td><a onClick={()=>handleClick(id)}>وضعیت تحویل</a></td>
            </tr>
        })
        }
        
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

export default Table
