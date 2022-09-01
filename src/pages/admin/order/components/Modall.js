
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Modall = ({changeModal,IsTahvil,passOrder,productsOrder,showmodal,handleClose}) => {


    


  
  const {id,name,phone,deliveryTime,sumBuying,address,product}=productsOrder

  const handleClickDeliver = () =>{
    axios
      .patch(`http://localhost:3002/orders/${id}`,{status:true})
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

      handleClose()
  }
  return (
    <>
    

      
      <Modal show={showmodal} onHide={handleClose}>
      
        <Modal.Header  >
        <Modal.Title >نمایش سفارش</Modal.Title>
        <closeButton/>
        </Modal.Header>
        <Modal.Body>
            
            <p><span className='text-danger'>نام مشتری </span> :{name}</p>
            <p><span className='text-danger'> آدرس </span> :  {address}</p>
            <p><span className='text-danger'> تلفن </span> : {phone}</p>
            <p><span className='text-danger'>زمان سفارش </span> : {deliveryTime}</p>
            <table class="table">
              <thead>
                <tr>

                <th>کالا</th>
                <th>قیمت</th>
                <th>تعداد</th>
                </tr>

              </thead>
              <tbody>
                  {product.map((item , index) => {
                    const{name , price , counter} = item
                    return(
                      <tr className={index % 2 ===0 ? 'table-info' : "table-primary"}>
                        <td >{name}</td>
                        <td >{price}</td>
                        <td >{counter}</td>
                      </tr>
                    )
                })}
              </tbody>
            </table>
            </Modal.Body>
        <Modal.Footer dir='ltr'>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleClickDeliver}>
            تحویل
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}





export default Modall