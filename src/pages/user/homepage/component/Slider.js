import React from 'react'
import ImageSlider from './ImageSlider'
import pic1 from '../../../../asset/images/slider/9fbHKqVMEZM5tcZjct5GaT-1200-80.jpg.webp'
import pic2 from '../../../../asset/images/slider/best_android_phone_uk_2022_smartphones.webp'
import pic3 from '../../../../asset/images/slider/best_usb_flash_drives.webp'
import pic4 from '../../../../asset/images/slider/Flash_storage_USB_shutterstock_1612117966.webp'
import pic5 from '../../../../asset/images/slider/phone-screen-mockup_53876-76354.webp'
import pic6 from '../../../../asset/images/slider/photo-1593642632823-8f785ba67e45.avif'
const Slider = () => {
  const slides =[
    {url:pic1 , title:'pic1'},
    {url:pic2, title:'pic2'},
    {url:pic3 , title:'pic3'},
    {url:pic4 , title:'pic4'},
    {url:pic5 , title:'pic5'},
    {url:pic6 , title:'pic6'},
  ]

  const containerStyles={
    width:"1295px",
    height:"500px",
    margin:"0 auto"
  }


  return (
    <div style={containerStyles}>
    <ImageSlider slides={slides} /> 
    </div>
    
  )
}

export default Slider