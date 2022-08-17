import React from 'react'

function BuutonEditeProduct() {

    const handleClick =(e) =>{
        e.preventDefault();
        window.location.reload(true);
    }

  return (
    <>
      <div className="d-flex justify-content-between" dir="rtl">
        <h1>مدیریت موجودی ها و قیمت ها</h1>
        <button  className='btn btn-success' onClick={handleClick}> ذخیره</button>
    </div>
    </>
  )
}

export default BuutonEditeProduct
