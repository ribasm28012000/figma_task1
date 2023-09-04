import React from 'react'
import '../css/MenuBar.css'


const MenuBar = () => {

  return (
    <>
    <div className="menuHead"><span>Menu</span></div>
    <div className="menuBar w-60 h-80">

      <div className="menu ">
          <img src="icons/icon_home.png" alt="Home" />
          <a href="#" className='text-black text-xl font-normal'>Home</a>
      </div>

      <div className="menu ">
          <img src="icons/icon_bookmark.png" alt="Bookmarks"/>
          <a href="#" className='text-black text-xl font-normal'>Bookmarks</a>
      </div>

      <div className="menu ">
          <img src="icons/icon_message.png" alt="Home"/>
          <a href="#" className='text-black text-xl font-normal'>Messages</a>
      </div>

      <div className="menu ">
          <img src="icons/icon_notification.png" alt="Home"/>
          <a href="#" className='text-black text-xl font-normal'>Notifications</a>
      </div>

      <div className="menu">
          <img src="icons/icon_setting.png" alt="Home"/>
          <a href="#" className='text-black text-xl font-normal'>Settings</a>
      </div>

      <div className="menu ">
          <img src="icons/icon_profile.png" alt="Home"/>
          <a href="#" className='text-black text-xl font-normal'>Profile</a>
      </div> 
      <button className='addPost w-[100px] h-[31px] bg-blue-500 rounded text-white text-base font-medium' >Add post</button>
    </div>
    
    </>
  )
}

export default MenuBar