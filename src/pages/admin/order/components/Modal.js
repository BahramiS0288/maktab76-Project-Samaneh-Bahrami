import React from 'react'
// import './modal.css'

const Modal = ({changeModal,IsTahvil,passOrder,productsOrder}) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => changeModal(false)}>X</button>
            <div className="title">
                <h1>نمایش سفارش</h1>
            </div>
            <div className="body">
                {/* {passOrder.map((item) =>{
                   const{id,name,phone,address,tahvil,deliveryTime,products}=item
                   return<>
                    <p>{name}:نام مشتری</p>
                    <p>{address}:آدرس</p>
                    <p>{phone}:تلفن</p>
                    <p>{tahvil}:زمان تحویل</p>
                    <p>{deliveryTime}:زمان سفارش</p>
                    {products.map((product) =>{
                        const{id,name,price,counter}=product
                        return<>
                        
                        </>
                    })}
                   </>
                })} */}
            </div>
            <div className="footer">
                <p>زمان تحویل</p>
            </div>
        </div>
    </div>
  )
}

export default Modal