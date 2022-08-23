import React from 'react'

const StatusOrder = ({setPageCount,setDeliver,setIsTahvil,setNotDeliver,setProductsOrderDeliver,setStatusRaidioButton,setFirstUpload,setProductsOrderNotDeliver}) => {

const limit =4;
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
  

  return (
    <div className="d-flex justify-content-between mt-5" dir="rtl">
          <h1>مدیریت سفارش ها</h1>
          <div>
            <form name="form">
              <label htmlFor="deliver" className='mx-2'>سفارش ها تحویل شده</label>
                <input  type="radio" id="deliver"  value="deliver" name="myradio" onChange={a}/>
                  <label htmlFor="notdeliver" className='mx-2'>سفارش های در انتظار تحویل</label>
                <input type="radio" id="notdeliver" value="notdeliver" name="myradio" onChange={a}/>
            </form>
          </div>
      </div>
  )
}

export default StatusOrder