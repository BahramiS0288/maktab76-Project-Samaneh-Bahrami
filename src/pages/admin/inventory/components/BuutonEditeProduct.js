import React, { useEffect } from 'react'

function BuutonEditeProduct({setRefresh}) {

  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Escape') {
        event.preventDefault();

        handleClick();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // return () => {
    //   document.removeEventListener('keydown', keyDownHandler);
    // };
  }, []);

    const handleClick =() =>{
        // e.preventDefault();
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
