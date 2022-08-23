
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Modal from './Modal'
import ModalTahvil from "./ModalTahvil";


const TableStyle=styled.table` 
    border-collapse: collapse;
    width: 100%;
    direction: rtl;
  
  th, td {
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #D6EEEE;
  }
  `
 

const Table = () => {
    const[orders,setOrders]=useState([]);
    const[pageCount,setPageCount] = useState(0)
    const [productsOrder,setProductsOrder] = useState([])
    const [productsOrderDeliver,setProductsOrderDeliver] = useState([])
  const [productsOrderNotDeliver,setProductsOrderNotDeliver] = useState([])
  const[openModal,setOpenModal]=useState(false)
  const[openModalTahvil,setOpenModalTahvil]=useState(false)
  const[deliver,setDeliver]=useState(false)
  const[NotDeliver,setNotDeliver]=useState(false)
  const[IsTahvil,setIsTahvil]=useState(false)
  const[firstUpload,setFirstUpload]=useState(false)
  const[statusRaidioButton,setStatusRaidioButton]=useState(true)
  

  let passOrder=[]
 
    let f =[]

    const limit =4

    useEffect(() =>{
        const getOrder = async () =>{
            const res = await fetch(
                `http://localhost:3002/orders?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get('x-total-count')
            setPageCount(total/limit)
            setOrders(data)
            setFirstUpload(true)
        }

        getOrder()
    },[])

    const fetchOrder= async(currentPage)=>{
      if(firstUpload){
        const res = await fetch(
          `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}`
      )
      const data = await res.json();
      setOrders(data)
      }else if(statusRaidioButton){
        const res = await fetch(
          `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}&?status=true`
      )
      const data = await res.json();
      setProductsOrderDeliver(data);
      
      }else{
        const res = await fetch(
          `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}&?status=false`
      )
      const data = await res.json();
      setProductsOrderNotDeliver(data);
      
      }
       
     }
    
      const handlePageClick=({selected})=>{
        let currentPage = selected +1 ;
         fetchOrder(currentPage);
        
      }


      const getOrderList = (id) =>{
        fetch(
            `http://localhost:3002/orders/${id}`
        ).then((res)=>res.json())
        .then((data) => {setProductsOrder(data)
        f=data
        console.log(f);})
        
        
        
    }

    const getDeliverOrder=async()=>{
      const res = await fetch(
        `http://localhost:3002/orders?status=true&?_page=1&_limit=${limit}`
    )
    const data = await res.json();
    const total = res.headers.get('x-total-count')
          setPageCount(total/limit)
          setProductsOrderDeliver(data);
          
    }

    const getNotDeliverOrder=async()=>{
      const res = await fetch(
        `http://localhost:3002/orders?status=false&?_page=1&_limit=${limit}`
    )
    const data = await res.json();
    const total = res.headers.get('x-total-count')
          setPageCount(total/limit)
          setProductsOrderNotDeliver(data);
          
    }


    const a=()=>{
      setFirstUpload(false)
      // console.log(productsOrder);
      // sperade()
      let status=document.querySelector('input[name="myradio"]:checked').value;
       if(status === 'deliver'){
        setStatusRaidioButton(true)
        getDeliverOrder()
        setDeliver(true)
        setNotDeliver(false)
        setIsTahvil(false) 
        
       }else{
        setStatusRaidioButton(false)
        getNotDeliverOrder()
        setNotDeliver(true)
        setDeliver(false)
        setIsTahvil(true)
       }
    //   let radios = document.forms["form"].elements["myradio"];
    //   for(var i = 0, max = radios.length; i < max; i++) {
    //     radios[i].onclick = function() {
            
    //     }
    // }
     }



  const handleClick =(id) =>{
    getOrderList(id)
    console.log(productsOrder);
    
    if(IsTahvil){
      setOpenModalTahvil(true)
    }else{
      setOpenModal(true)
    }
    
  }

  return (
    <>
    <div className='container'>
      <div className="d-flex justify-content-between" dir="rtl">
          <h1>مدیریت سفارش ها</h1>
          <div>
            <form name="form">
              <label htmlFor="deliver">سفارش ها تحویل شده</label>
                <input type="radio" id="deliver"  value="deliver" name="myradio" onChange={a}/>
                  <label htmlFor="notdeliver">سفارش های در انتظار تحویل</label>
                <input type="radio" id="notdeliver" value="notdeliver" name="myradio" onChange={a}/>
            </form>
          </div>
      </div>
    <TableStyle>
    
        <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت سفارش  </th>
            
        </tr>
        
        {firstUpload ?
        orders.map((order)=>{
            const{id,name,sumBuying,deliveryTime}=order
            return <tr key={id}>
                <td>{name}</td>
                <td>{sumBuying}</td>
                <td>{deliveryTime}</td>
                <td><a onClick={()=>handleClick(id)}>وضعیت تحویل</a></td>
            </tr>
        }): statusRaidioButton ? productsOrderDeliver.map((order)=>{
          const{id,name,sumBuying,deliveryTime}=order
          return <tr key={id}>
              <td>{name}</td>
              <td>{sumBuying}</td>
              <td>{deliveryTime}</td>
              <td><a onClick={()=>handleClick(id)}>وضعیت تحویل</a></td>
          </tr>
      }) : productsOrderNotDeliver.map((order)=>{
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
        containerClassName={'pagination justify-content-center'}
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

{
          openModal && deliver && <Modal changeModal={setOpenModal}
            IsTahvil={IsTahvil} passOrder={passOrder}
            />
        }
        {
          openModalTahvil && NotDeliver && <ModalTahvil changeModalTahvil={setOpenModalTahvil}
            IsTahvil={IsTahvil} passOrder={passOrder}
            />
        }
    </div>
    </>
  )
}

export default Table
