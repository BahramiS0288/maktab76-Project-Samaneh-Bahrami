import React from 'react'

function BuutonEditeProduct({setRefresh}) {

    const handleClick =(e) =>{
        e.preventDefault();
        setRefresh()
       
    }

  return (
    <>
      <div className="d-flex justify-content-between mt-5" dir="rtl">
        <h1>مدیریت موجودی ها و قیمت ها</h1>
        <button  className='btn btn-success py-2 px-5' onClick={handleClick}> ذخیره</button>
    </div>
    </>
  )
}

export default BuutonEditeProduct
