import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const[currentIndex,setCurrentIndex]=useState(0)
    const backgroundUrl=`http://localhost:3002/files/${slides[currentIndex]}`
const left ='>'
const right ='<'
    const sliderStyles={
        height:'100%',
        position:'relative'
    }
    // const slideStyles={
    //     width:'100%',
    //     height:'100%',
    //     backgroundPosition:'center',
    //     // borderRadius:'10px',
    //     backgroundSize:'cover',
    //     backgroundImage:`url(${backgroundUrl})`,
    // }
    const leftArrowStyles ={
        position: "absolute",
        top:"50%",
        transform:'translate(0,-50%)',
        left:'32px',
        fontSize:'45px',
        color:'#000',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyles ={
        position: "absolute",
        top:"50%",
        transform:'translate(0,-50%)',
        right:'32px',
        fontSize:'45px',
        color:'#000',
        zIndex:1,
        cursor:'pointer'
    }
    const goToPrevios=()=>{
        const isFirstPage = currentIndex === 0
        const newIndex= isFirstPage ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    const goToNext=()=>{
        const islastPage = currentIndex === slides.length-1
        const newIndex= islastPage ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevios}>{left}</div>
        <div style={rightArrowStyles} onClick={goToNext}>{right}</div>
        <div ><img className="card-img-top mb-5 mb-md-0 d-block w-100" src={`http://localhost:3002/files/${slides[currentIndex]}`} alt="..." style={{width:"408px",height:"408px"}}/></div>
    </div>
  )
}

export default ImageSlider