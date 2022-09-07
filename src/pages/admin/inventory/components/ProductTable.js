import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { EditText } from "react-edit-text";

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

const ProductTable = ({
  refresh,
  setRefresh,
  setIsPriceChange,
  isPriceChange,
}) => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [idEditPrice, setIdEditPrice] = useState(-1);
  const [idEditCount, setIdEditCount] = useState(-1);
  const [priceEdite, setPriceEdite] = useState(false);

  const inputPriceRef = useRef([]);
  let allIndexClicked = [];

  const limit = 4;

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
    setIdEditPrice(-1);
    setIdEditCount(-1);
    setRefresh();
  }, [refresh]);

  const fetchOrder = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async ({ selected }) => {
    let currentPage = selected + 1;
    const dataOfServer = await fetchOrder(currentPage);
    setProducts(dataOfServer);
  };

  const handleChangePrice = async (e, id) => {
    await fetch(`http://localhost:3002/products/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: e.target.value }),
    });
  };

  const handleChangeCount = async (e, id) => {
    await fetch(`http://localhost:3002/products/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: e.target.value }),
    });
  };

  const handleChangToInpotPrice = (index) => {
    setIdEditPrice(index);
    // setIsPriceChange()
    allIndexClicked.push(index);
  };

  return (
    <>
      <TableStyle>
        <thead>
          <tr>
            <th> کالا</th>
            <th> قیمت</th>
            <th> موجودی</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const { id, name, price, count } = product;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  {/* <p onClick={()=>setPriceEdite(true)} className={priceEdite ? "d-none" : "d-block"}>{price}</p>
                  <input type="text" className={priceEdite ? "d-block" : "d-none"}/> */}
                  {idEditPrice === index ? (
                    <input
                      id="price"
                      type="text"
                      defaultValue={price}
                      onChange={(event) => handleChangePrice(event, id)}
                    />
                  ) : (
                    <p onClick={() => handleChangToInpotPrice(index)}>
                      {Number(price).toLocaleString()} ریال
                    </p>
                  )}
                </td>

                <td>
                  {idEditCount === index ? (
                    <input
                      type="text"
                      defaultValue={count}
                      onChange={(event) => handleChangeCount(event, id)}
                    />
                  ) : (
                    <p onClick={() => setIdEditCount(index)}>{count}</p>
                  )}

                  {/* <EditText
            name='textbox'
            style={{ fontSize: '16px', border: '1px solid #ccc' }}
            value={count}
            onChange={(e) => handleChange(e, setText,id)}
              
              /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableStyle>

      <ReactPaginate
        previousLabel={"قبلی"}
        nextLabel={"بعدی"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
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

export default ProductTable;
