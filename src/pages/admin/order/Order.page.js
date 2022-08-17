import { useEffect, useState } from "react";
import Table from "./components/Table"
import Modal from './components/Modal'
import ModalTahvil from "./components/ModalTahvil";


export function Order(){
  // const [productsOrder,setProductsOrder] = useState('')
  const [productsOrderDeliver,setProductsOrderDeliver] = useState([])
  const [productsOrderNotDeliver,setProductsOrderNotDeliver] = useState([])
  const[openModal,setOpenModal]=useState(false)
  const[openModalTahvil,setOpenModalTahvil]=useState(false)
  const[deliver,setDeliver]=useState(false)
  const[NotDeliver,setNotDeliver]=useState(false)
  const[IsTahvil,setIsTahvil]=useState(false)
  

  let passOrder=[]
 

//   const getOrder = async () =>{
//     const res = await fetch(
//         `http://localhost:4000/orders/${id}`
//     );
//     const data = await res.json();
//     setProductsOrder(data)
// }

// const sperade =() =>{
//   let arrOfDeliver =[]
//   let arrOfNotDeliver =[]
//   productsOrder.map((item,index) =>{
//     if(item.status === 'ture'){
//       arrOfDeliver.push(item)
//     }else{
//       arrOfNotDeliver.push(item)
      
//     }
//   })
//   setProductsOrderDeliver(arrOfDeliver)
 
//   setProductsOrderNotDeliver(arrOfNotDeliver)
// }

const a=()=>{
  
  // console.log(productsOrder);
  // sperade()
  let status=document.querySelector('input[name="myradio"]:checked').value;
   if(status === 'deliver'){
    
    setDeliver(true)
    setNotDeliver(false)
    setIsTahvil(false) 
    passOrder=productsOrderDeliver
   }else{
    
    setNotDeliver(true)
    setDeliver(false)
    setIsTahvil(true)
    passOrder=productsOrderNotDeliver
   }
//   let radios = document.forms["form"].elements["myradio"];
//   for(var i = 0, max = radios.length; i < max; i++) {
//     radios[i].onclick = function() {
        
//     }
// }
 }
  
    return( 
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
      
      <Table changeModal={setOpenModal} changeModalTahvil={setOpenModalTahvil}
       IsTahvil={IsTahvil}/>
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
)}