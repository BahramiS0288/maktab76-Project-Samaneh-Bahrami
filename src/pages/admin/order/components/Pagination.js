import React ,{ useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'



const Pagination = ({pageCount,fetchOrder}) => {
  

  const handlePageClick=({selected})=>{
    let currentPage = selected +1 ;
     fetchOrder(currentPage);
    
  }

  return (
    <div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center mt-5 pt-5'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        ></ReactPaginate>
    </div>
  )
}

export default Pagination