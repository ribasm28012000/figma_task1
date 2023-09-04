import React from 'react'
import '../css/AdsBar.css'

const AdsBar = () => {
  return (
    <>
    <div className="adsHead"><span>ADS</span></div>
    <div className="add ">
        <img src="images/Add.png" alt="Add" />
        <a href="#" className='text-black text-xl font-normal'></a>
    </div>
    <div className="addContent w-64 h-10 relative">
    <img src="icons/AddEmoji.png" alt="" className='w-7 h-7 left-0 top-[7px] absolute'/>
    <p className="w-56 h-10 left-[42.79px] top-0 absolute text-black text-base font-normal leading-normal">How to improve business in social media</p>
    </div>
</>
  )
}

export default AdsBar