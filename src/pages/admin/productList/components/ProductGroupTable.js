import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SaveModal from "./Modal";
import EditModal from "./ModalEdite";

const Dialog = styled.dialog `
box-shadow: 0 8px 6px -6px black;
position: static;
left: 20%;
top: 10%;

`

const TableStyle = styled.table`
  border-collapse: collapse;
  width: 80%;
  /* direction: rtl; */
  margin-top: 100px;
  margin-right: 80px;
  border-top: 2px dashed #d6eeee;
  border-bottom: 2px dashed #d6eeee;

  th,
  td {
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #d6eeee;
  }
`;

const ProductGroupTable = ({addedProduct}) => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalEdite, setShowModalEdite] = useState(false);
  const[isShow,setIsShow]=useState(false)
  const [idDelete, setIdDelete] = useState(0);
  const [idEdite, setIdEdite] = useState(0);
  const[thumbnailThis ,setThumbnailThis]=useState('')
  const[refresh,setRefresh]=useState(false)
  const[idDialog,setIdDialog]=useState(0)

  const limit = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      const res = await fetch(
        `http://localhost:3002/products?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(total / limit);
      setProducts(data);
    };

    getOrder();
  }, []);


  useEffect(() => {
    const getOrder = async () => {
      const res = await fetch(
        `http://localhost:3002/products?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(total / limit);
      setProducts(data);
    };

    getOrder();
    setRefresh(false)
  }, [addedProduct,refresh]);

  const fetchOrder = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async ({ selected }) => {
    console.log(selected);
    let currentPage = selected + 1;
    const dataOfServer = await fetchOrder(currentPage);
    setProducts(dataOfServer);
  };

  const handleDeleteIcon = (id) => {
    setIsModalOpen(true);
    setIdDelete(id);
  };

  const handleEditeIcon = (id) => {
    console.log(`idEdite:${id}`);
    setIdEdite(id)
    setShowModalEdite(true);
    
    
  };

  const handleShowDialog =(thumbnail,id) => {
    setIsShow(true)
    setThumbnailThis(thumbnail)
    setIdDialog(id)

  }

  const deleteHandler = async (e) => {
    const res = await fetch(`http://localhost:3002/products/${idDelete}`, {
      method: "DELETE",
    });
    // const data = await res.json();
    // const getOrder = async () => {
    //   const res = await fetch(
    //     `http://localhost:3002/products?_page=1&_limit=${limit}`
    //   );
    //   const data = await res.json();
    //   const total = res.headers.get("x-total-count");
    //   setPageCount(total / limit);
    //   setProducts(data);
    // };
    // getOrder()
    setRefresh(true)
    setIsModalOpen(false)
    e.stopPropagation();
    
  };

  

  return (
    <>
      {showModalEdite && (
        <EditModal
          show={showModalEdite}
          handleClose={() => setShowModalEdite(false)}
          id={idEdite}
          setRefresh={()=>setRefresh(true)}
        />
      )}

      {isModalOpen && (
        <SaveModal
          show={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          handleDelete={deleteHandler}
        />
      )}

      <TableStyle>
        <thead>
          <tr>
            <th>تصویر</th>
            <th> نام کلا</th>
            <th> دسته بندی</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, name, groupname, thumbnail } = product;
            return (
              <tr key={id}>
                <td>
                  <img
                    src={`http://localhost:3002/files/${thumbnail}`}
                    alt=""
                    onClick={()=>handleShowDialog(thumbnail,id)}
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "8px",
                    }}
                  />
                  
                </td>
                <td>{name}</td>
                <td>{groupname}</td>
                <td className="d-flex">
                  <i
                    className="bi bi-trash3 mx-2 text-primary"
                    onClick={() => handleDeleteIcon(id)}
                  ></i>
                  <i
                    className="bi bi-pencil-square mx-2 text-primary"
                    onClick={() => handleEditeIcon(id)}
                  ></i>
                </td>
              </tr>
            );
          })}
          
            {
              isShow && <Dialog style={{ position: "absolute" }}
              open
              onClick={handleShowDialog}>
               <img src={`http://localhost:3002/files/${thumbnailThis}`} alt=""  onClick={() =>navigate(`/productOverview/${idDialog}`)} 
               style={{
                height: "412px",
                width: "550px",
                
              }}/>
              </Dialog>
              
            }
          
        </tbody>
      </TableStyle>

      <ReactPaginate
        previousLabel={"قبلی"}
        nextLabel={"بعدی"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={
          "pagination justify-content-center mb-5 pb-5 fixed-bottom"
        }
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      ></ReactPaginate>
    </>
  );
};

export default ProductGroupTable;

