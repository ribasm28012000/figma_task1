import React from 'react'
import '../css/NavBar.css'
import {BsSearchHeart} from 'react-icons/bs'

const NavBar = () => {

  const handleClick=()=>{
    console.log("The Search process working")
  }
  return (
    <>
    <div className="navBar h-20 min-w-min max-w-[100%] bg-rose-300 relative">
      <div className="companyLogo absolute font-normal">Plonk</div>

      <div className="searchBar relative">
        <input type="text" name='searchValue' className='searchInput top-[4px] bg-rose-300 absolute' placeholder='Search' />
        <div className="searchVector w-6 h-6 left-[295px] top-0 absolute">
          <button className="left-[-22px] top-[9px] absolute" onClick={handleClick}><BsSearchHeart/></button>
        </div>
        <div className="line w-[290px] h-[0px] left-0 top-[31px] absolute border border-zinc-800"></div>
      </div>

      <div className="w-[54px] h-[54px] left-[433px] top-[13px] absolute">
        <img src="images/profile.png" alt="Hai" className='profileImg w-[50.82px] h-[50.82px] left-[1.59px] top-[1.59px] absolute'/>
        <div className="w-[54px] h-[54px] left-0 top-0 absolute rounded-full" />
      </div>

      

      <a href="#" className='navFriends  text-lg  absolute  font-medium'>My Friends</a>
      <a href="#" className='navGallery  text-lg  absolute  font-medium'>My Gallery</a>
    </div>
    </>
  )
}

export default NavBar