import axios from "axios";
import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CkEditor from "./CkEditor";

export default function EditModal({ show, handleClose,id,setRefresh}) {
  const[product,setProduct] = useState([])
  const [category,setCategory]=useState([])
  const [imageProduct,setImageProduct]=useState([])
 
  const [data,setData]=useState({name:"",subgroupname:"", price:"" ,groupname:"" , count:"" ,describtion:"" ,image:[],thumbnail:"" , 
creatAt:"" , id:""})

  const{subgroupname,groupname,name,image,describtion}=product
  
  let loadFile = (event) => {
    // let image = document.getElementById("output");
    // image.src = URL.createObjectURL(event.target.files[0]);

    const data = new FormData();
    data.append("image", event.target.files[0]);

    axios
      .post("http://localhost:3002/upload", data)
      .then((res) => {
        setImageProduct([...imageProduct, res.data.filename]);
        setData({...data,image:[...imageProduct],thumbnail:res.data.filename})
      })
      .catch((error) => console.log(error));
    
    fetch(`http://localhost:3002/products/${id}`,{
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({image:imageProduct}).then((res)=> res.json())
                }).then((data) => console.log(data))

  };

  

  useEffect(()=>{
    const getProduct = async () => {
        const res = await fetch(
          `http://localhost:3002/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
        setData({name:data.name,subgroupname:data.subgroupname ,price:data.price ,groupname:data.groupname,count:data.count,describtion:data.describtion ,image:data.image,thumbnail:data.thumbnail, creatAt:data.creatAt,id:data.id})
        setImageProduct(data.image)
      };

      const getProductGroup = async () => {
        const res = await fetch(
          `http://localhost:3002/products`
        );
        const data = await res.json();
        setCategory(data);
        
      };
  
      getProduct();
      getProductGroup();
      
      
  },[])

 

  const handleChange=async({target})=>{
    let categoryArr=target.value.split('/');
    
      let category=categoryArr[0]
      
      
    
    
      let subCtegory = categoryArr[1]
      
    await setData({
      ...data,"groupname":category,"subgroupname":subCtegory
    })
    
    
   
  }
  const handleChangeData = async (key, value) => {
    // console.log(data)
    await setData({
            ...data, [key]: value
        }
    )
}

const handleSave =async() =>{
  // console.log(data);
  await fetch(`http://localhost:3002/products/${id}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  setRefresh()
  handleClose()
}

const removePicture=(picture)=>{
  // console.log(picture);
  const pictures =imageProduct.filter((item) => item !== picture)
  setImageProduct(pictures)
}

  return (
    <>
    {console.log(data)}
      <Button variant="primary" onClick={show}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="was-validated">
            <Form.Group className="mb-3">
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                تصویر کالا
              </Form.Label>
              <Form.Control
              
                type="file"
                dir="ltr"
                accept="image/*"
                onChange={(event) => loadFile(event)}
                autoFocus
                className="custom-file-input"
                id="file"
                required
              />
              <div class="invalid-feedback">عکس انتخاب کنید</div>
              <div className="d-flex">
                {imageProduct.map((item) =>{
                    return(
                      <>
                       <i class="bi bi-x" onClick={()=>removePicture(item)}></i>
                      <img src={`http://localhost:3002/files/${item}`} style={{ width: "50px",height:"50px" ,marginTop:"15px"}}
                    className="rounded-circle" alt=""/>
                      </>
                     
                    ) 
                })}
              
              {/* <p>
                <img
                  id="output"
                  alt=""
                  style={{ width: "100px" ,height:"50px",marginTop:"15px"}}
                  className="rounded-circle"
                />
              </p> */}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                نام کالا
              </Form.Label>
              <Form.Control
                type="text"
                autoFocus
                className="custom-file-input"
                defaultValue={name}
                id="validatedCustomFile"
                onChange={(e)=>handleChangeData("name",e.target.value)}
                required
              />
              <div class="invalid-feedback"> نام کالا را وارد کنید</div>
              {/* <p>
                <img id="output" alt="" style={{ width: "200px" }} />
              </p> */}
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>دسته بندی</Form.Label>
              <br />
              <select className="custom-select rounded col-12" required onChange={(e)=>handleChange(e)}>
                <option value={`${groupname}/${subgroupname}`}> {groupname}/{subgroupname}</option>
                {category.map((item) =>{
                    const{subgroupname,groupname}=item;
                    return <option value={`${groupname}/${subgroupname}`}>{groupname}/{subgroupname}</option>
                })}
              </select>
              <div class="invalid-feedback">دسته بندی رو مشخص کنید</div>
              <br />

              {/* <Form.Control as="textarea" rows={3} /> */}
            </Form.Group>
            <Form.Group>
              <Form.Label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                توضیحات
              </Form.Label>
              <CkEditor describtion={describtion} handleChangeData={handleChangeData}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer dir="ltr">
          <Button variant="secondary" onClick={handleClose}>
            لغو
          </Button>
          <Button variant="primary" onClick={handleSave}>
            ذخیره تغییرات
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
