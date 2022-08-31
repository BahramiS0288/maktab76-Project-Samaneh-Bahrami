import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Category from '../Category'
import './SidebarStyle.css'

const CategoryDetails = () => {
    const params=useParams()
    const navigate= useNavigate()
  const GroupId =params.categoryId
  const[category,setCategory]=useState([])
  const[allCategory,setAllCategory]=useState([])




  useEffect(()=>{
      fetch(
          `http://localhost:3002/productsgroups?iDgroupname=${GroupId}`
        ).then((res)=> res.json())
        .then((data) => setCategory(data))


        fetch(
          `http://localhost:3002/productsgroups`
        ).then((res)=> res.json())
        .then((data) => setAllCategory(data))
        
  },[])


return(
  <div>
          {/* <nav className="navbar navbar-expand navbar-dark bg-primary">
            {" "}
            <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
              <span className="navbar-toggler-icon" />
            </a>{" "}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample02"
              aria-controls="navbarsExample02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon" />{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {" "}
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="#">
                    Link
                  </a>{" "}
                </li>
              </ul>
              <form className="form-inline my-2 my-md-0"> </form>
            </div>
          </nav> */}
          <div id="wrapper" className="toggled ">
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-brand">
                  {" "}
                  <a href="/"> همه ی محصولات </a>{" "}
                </li>
                {allCategory.map((item)=>{
            const{groupname,iDgroupname} = item
            return(
              <li><a href={`/category/${iDgroupname}`}>
              {groupname}
            </a></li>
            )
          })}
                
              </ul>
            </div>
            <div id="page-content-wrapper">
              <div className="container-fluid">
                {
              category.map((item) => {
                  const{groupname,iDgroupname} = item
                  
                  return <>
                      <h1 class="display-1 mx-5 mt-3 primary">کالا های گروه {groupname} :</h1>
                      <Category nameGroup={groupname} />
                  </>
                  
                })
                
                    }
  
              </div>
            </div>
          </div>
  
          
        </div>)
}

export default CategoryDetails