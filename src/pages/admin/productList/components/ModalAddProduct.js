import Q from "q";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import SparkMD5 from "spark-md5";
import CkEditor from "./CkEditor";

const ModalAddProduct = ({ show, handleClose,setAddedProduct }) => {
  const [imageProduct, setImageProduct] = useState([]);
  const [data, setData] = useState({
    name: "",
    subgroupname: "",
    price: "",
    groupname: "",
    count: "",
    describtion: "",
    image: [],
    thumbnail: "",
    creatAt: "",
    id: "",
  });
  const [category, setCategory] = useState([]);

  const handleChange=async({target})=>{
    let categoryArr=target.value.split('/');
    
      let category=categoryArr[0]
      
      
    
    
      let subCtegory = categoryArr[1]
      
    await setData({
      ...data,"groupname":category,"subgroupname":subCtegory
    })
    
    
   
  }

  useEffect(() => {
    const getProductGroup = async () => {
      const res = await fetch(`http://localhost:3002/products`);
      const data = await res.json();
      setCategory(data);
    };
    getProductGroup();
  },[]);

  let loadFile = (event) => {
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    calculate();
    // fetch(`http://localhost:3002/products/${id}`,{
    //               method: "PATCH",
    //               headers: { "Content-Type": "application/json" },
    //               body: JSON.stringify({image:imageProduct}).then((res)=> res.json())
    //             }).then((data) => console.log(data))
  };

  function calculateMD5Hash(file, bufferSize) {
    let def = Q.defer();

    let fileReader = new FileReader();
    let fileSlicer =
      File.prototype.slice ||
      File.prototype.mozSlice ||
      File.prototype.webkitSlice;
    let hashAlgorithm = new SparkMD5();
    let totalParts = Math.ceil(file.size / bufferSize);
    let currentPart = 0;
    let startTime = new Date().getTime();

    fileReader.onload = function (e) {
      currentPart += 1;

      def.notify({
        currentPart: currentPart,
        totalParts: totalParts,
      });

      let buffer = e.target.result;
      hashAlgorithm.appendBinary(buffer);

      if (currentPart < totalParts) {
        processNextPart();
        return;
      }

      def.resolve({
        hashResult: hashAlgorithm.end(),
        duration: new Date().getTime() - startTime,
      });
    };

    fileReader.onerror = function (e) {
      def.reject(e);
    };

    function processNextPart() {
      let start = currentPart * bufferSize;
      let end = Math.min(start + bufferSize, file.size);
      fileReader.readAsBinaryString(fileSlicer.call(file, start, end));
    }

    processNextPart();
    return def.promise;
  }

  function calculate() {
    let input = document.getElementById("file");
    if (!input.files.length) {
      return;
    }
    let file = input.files[0];
    let bufferSize = Math.pow(1024, 2) * 10; // 10MB

    calculateMD5Hash(file, bufferSize).then(
      function (result) {
        // Success

        setImageProduct([...imageProduct, result.hashResult]);

        // SEND result TO THE SERVER
      },
      function (err) {
        // There was an error,
      }
    );
  }
  const removePicture = (picture) => {
    console.log(picture);
    const pictures = imageProduct.filter((item) => item !== picture);
    setImageProduct(pictures);
  };

  const handleChangeData = async (key, value) => {
    await setData({
      ...data,
      [key]: value,
    });
  };

  const handleSave = async () => {
    await fetch(`http://localhost:3002/products/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setAddedProduct(true);
    handleClose()
  };

  return (
    <>
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
                {imageProduct.map((item) => {
                  return (
                    <>
                      <i
                        class="bi bi-x"
                        onClick={() => removePicture(item)}
                      ></i>
                      <img
                        src={`http://localhost:3002/files/${item}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          marginTop: "15px",
                        }}
                        className="rounded-circle"
                        alt=""
                      />
                    </>
                  );
                })}

                <p>
                  {/* <i class="bi bi-x" onClick={()=>removePicture(item)}></i> */}
                  <img
                    id="output"
                    alt=""
                    style={{
                      width: "100px",
                      height: "50px",
                      marginTop: "15px",
                    }}
                    className="rounded-circle"
                  />
                </p>
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
                id="validatedCustomFile"
                onChange={(e) => handleChangeData("name", e.target.value)}
                required
              />
              <div class="invalid-feedback"> نام کالا را وارد کنید</div>
              <p>
                <img id="output" alt="" style={{ width: "200px" }} />
              </p>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>دسته بندی</Form.Label>
              <br />
              <select
                className="custom-select rounded col-12"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="choose"> گروه کالا را انتخاب کنید</option>
                {category.map((item) => {
                  const { subgroupname, groupname } = item;
                  return (
                    <option value={`${groupname}/${subgroupname}`}>
                      {groupname}/{subgroupname}
                    </option>
                  );
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
              <CkEditor handleChangeData={handleChangeData} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer dir="ltr">
          <Button variant="secondary" onClick={handleClose}>
            لغو
          </Button>
          <Button variant="primary" onClick={handleSave}>
           اضافه کردن محصول
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
