import React from 'react'

const ModalTahvil = ({changeModalTahvil,IsTahvil,passOrder}) => {
  return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => changeModalTahvil(false)}>X</button>
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
                       </>
                    })} */}
                    <p>asfgh</p>
                    <p>kgbkj</p>
                    <p>hjhlkhlk</p>
                </div>
                <div className="footer">
                    <button>تحویل</button>
                </div>
            </div>
        </div>
      
  )
}

export default ModalTahvil