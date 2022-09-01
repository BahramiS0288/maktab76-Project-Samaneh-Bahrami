import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { compareAsc, format } from 'date-fns'


const ModalTahvil = ({changeModalTahvil,IsTahvil,passOrder,showmodal,handleClose,productsOrder}) => {
//   return (
//         <div className="modalBackground">
//             <div className="modalContainer">
//                 <button onClick={() => changeModalTahvil(false)}>X</button>
//                 <div className="title">
//                     <h1>نمایش سفارش</h1>
//                 </div>
//                 <div className="body">
//                     {/* {passOrder.map((item) =>{
//                        const{id,name,phone,address,tahvil,deliveryTime,products}=item
//                        return<>
//                         <p>{name}:نام مشتری</p>
//                         <p>{address}:آدرس</p>
//                         <p>{phone}:تلفن</p>
//                         <p>{tahvil}:زمان تحویل</p>
//                         <p>{deliveryTime}:زمان سفارش</p>
//                        </>
//                     })} */}
//                     <p>asfgh</p>
//                     <p>kgbkj</p>
//                     <p>hjhlkhlk</p>
//                 </div>
//                 <div className="footer">
//                     <button>تحویل</button>
//                 </div>
//             </div>
//         </div>
      
//   )

const {id,name,phone,deliveryTime,sumBuying,address,product}=productsOrder
return (
    <>
    

      
      <Modal show={showmodal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
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
                  {product.map((item,index) => {
                    const{name , price , counter} = item
                    return(
                      <tr className={index % 2 ===0 ? 'table-info' : "table-primary"}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{counter}</td>
                      </tr>
                    )
                })}
              </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
          
          <p style={{marginLeft:'100px'}} className='text-secondary'><span className='text-success'>  تاریخ تحویل </span>: {format(new Date(), "PPPP")}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTahvil