import React,{useState} from 'react'
import styled from 'styled-components'
import Modall from './Modall'
import ModalTahvil from "./ModalTahvil";

const TableStyle=styled.table` 
border-collapse: collapse;
    width: 80%;
    /* direction: rtl; */
    margin-top: 100px;
    margin-right: 80px;
    border-top: 2px dashed #d6eeee;
  
  th, td {
    /* text-align: left; */
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #D6EEEE;
  }
  `

const Tablee = ({productsOrderNotDeliver,IsTahvil,productsOrderDeliver,deliver,NotDeliver,statusRaidioButton,firstUpload,orders}) => {
    const [productsOrder,setProductsOrder] = useState([])
    const[openModal,setOpenModal]=useState(false)
  const[openModalTahvil,setOpenModalTahvil]=useState(false)

    let passOrder=[]
 
    let f =''

    const handleClick =(id) =>{
        getOrderList(id)
        
        
        
      }


      const getOrderList = (id) =>{
        fetch(
            `http://localhost:3002/orders/${id}`
        ).then((res)=>res.json())
        .then((data) => {
        if(data.status){
          setProductsOrder(data)
          setOpenModalTahvil(true)
          
        }else{
          setProductsOrder(data)
          setOpenModal(true)
          
          
        }
      })
        
    }


  return (
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
                <td>{Number(sumBuying).toLocaleString()} ریال</td>
                <td>{deliveryTime}</td>
                <td><p onClick={()=>handleClick(id)} style={{color:"blue"}}>وضعیت تحویل</p></td>
            </tr>
        }): statusRaidioButton ? productsOrderDeliver.map((order)=>{
          const{id,name,sumBuying,deliveryTime}=order
          return <tr key={id}>
              <td>{name}</td>
              <td>{sumBuying}</td>
              <td>{deliveryTime}</td>
              <td><p onClick={()=>handleClick(id)} style={{color:"blue"}}>وضعیت تحویل</p></td>
          </tr>
      }) : productsOrderNotDeliver.map((order)=>{
        const{id,name,sumBuying,deliveryTime}=order
        return <tr key={id}>
            <td>{name}</td>
            <td>{sumBuying}</td>
            <td>{deliveryTime}</td>
            <td><p onClick={()=>handleClick(id)} style={{color:"blue"}}>وضعیت تحویل</p></td>
        </tr>
    })
        }
        {
          openModal &&  <Modall showmodal={openModal} handleClose={()=>setOpenModal(false)}
          productsOrder={productsOrder} 
            IsTahvil={IsTahvil} passOrder={passOrder}
            />
        }
        {
          openModalTahvil && <ModalTahvil handleClose={()=>setOpenModalTahvil(false)} showmodal={openModalTahvil} productsOrder={productsOrder} changeModalTahvil={setOpenModalTahvil}
            IsTahvil={IsTahvil} passOrder={passOrder}
            />
        }
        
    </TableStyle>
  )
}

export default Tablee