import React from 'react'
import '../css/RightSideBar.css'
import Follower from '../Follower.json'
import Suggest from '../SuggestFollowers.json'


const RightSideBar = () => {
   
  const handleFollow=(props)=>{
    console.log(`You Followed ${props.name}`)
  }

  const handleAccept=(props)=>{
    console.log(`You and ${props.name} are now Connected`)
  }

  return (
    <>
    <div className="rightSideBar w-[425px] h-[759px] mt-[100px] float-right relative">
      <div className='rightSideBarRect  absolute rounded-[15px] border border-zinc-500 border-opacity-25'/>
      <div className="innerRect fRight w-[306px] h-[667.71px]  absolute ">
          <div className="heading headingFollow">
            Recent Followers
          {
            Follower && Follower.map(followers=>{
              return(
              <div className="followers" key={followers.id}>
              <img className="followerImage" src={followers.prof_image} alt={followers.id} />
              <div className="followerName">
                <p>{followers.name}<br/> <span className='userId'>@{followers.user_id}</span></p>
              </div>  
                <button className='w-[63px] h-[31px] bg-blue-800 rounded text-white text-base font-medium' onClick={()=>handleAccept(followers)}>Accept</button>
              </div>
             ) })
          }
          </div>

          <div className="heading headingSuggest">
            Suggested For You
            {
            Suggest && Suggest.map(suggest=>{
              return(<div className="followers" key={suggest.id}>
              <img className="followerImage" src={suggest.prof_image} alt={suggest.id} />
              <div className="followerName">
                <p>{suggest.name}<br/> <span className='userId'>@{suggest.user_id}</span></p>
              </div>  
                <button className='w-[63px] h-[31px] bg-blue-800 rounded text-white text-base font-medium' onClick={()=>handleFollow(suggest)}>Follow</button>
              </div>
             ) })
          }
            </div>
      </div>
    </div>
    </>
  )
}

export default RightSideBar