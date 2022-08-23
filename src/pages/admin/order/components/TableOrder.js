import React ,{useState,useEffect}from 'react'
import Pagination from './Pagination'
import StatusOrder from './StatusOrder'
import Tablee from './Tablee'

const TableOrder = () => {
    const[pageCount,setPageCount] = useState(0)
    const[orders,setOrders]=useState([]);
    const [productsOrderDeliver,setProductsOrderDeliver] = useState([])
    const [productsOrderNotDeliver,setProductsOrderNotDeliver] = useState([])
    const[firstUpload,setFirstUpload]=useState(false)
  const[statusRaidioButton,setStatusRaidioButton]=useState(true)
  const[deliver,setDeliver]=useState(false)
  const[NotDeliver,setNotDeliver]=useState(false)
  const[IsTahvil,setIsTahvil]=useState(false)

  const limit =4


  useEffect(() =>{
    const getOrder = async () =>{
        const res = await fetch(
            `http://localhost:3002/orders?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get('x-total-count')
        setPageCount(total/limit)
        setOrders(data)
        setFirstUpload(true)
    }

    getOrder()
},[])

    const fetchOrder= async(currentPage)=>{
        if(firstUpload){
          const res = await fetch(
            `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}`
        )
        const data = await res.json();
        setOrders(data)
        }else if(statusRaidioButton){
          const res = await fetch(
            `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}&?status=true`
        )
        const data = await res.json();
        setProductsOrderDeliver(data);
        
        }else{
          const res = await fetch(
            `http://localhost:3002/orders?_page=${currentPage}&_limit=${limit}&?status=false`
        )
        const data = await res.json();
        setProductsOrderNotDeliver(data);
        
        }
         
       }

  return (
    <>
    <StatusOrder setPageCount={setPageCount} setProductsOrderNotDeliver={setProductsOrderNotDeliver}
    setProductsOrderDeliver={setProductsOrderDeliver} setFirstUpload={setFirstUpload}
    setStatusRaidioButton={setStatusRaidioButton} setNotDeliver={setNotDeliver}
    setDeliver={setDeliver} setIsTahvil={setIsTahvil}/>

    <Tablee firstUpload={firstUpload} orders={orders} 
    statusRaidioButton={statusRaidioButton} productsOrderDeliver={productsOrderDeliver}
    productsOrderNotDeliver={productsOrderNotDeliver} IsTahvil={IsTahvil}
    deliver={deliver} NotDeliver={NotDeliver}/>

    <Pagination pageCount={pageCount}  fetchOrder={fetchOrder}/>
    </>
  )
}

export default TableOrder