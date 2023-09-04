import React from 'react'
import '../css/RightSideBar.css'


const RightSideBar = () => {
  return (
    <>
    <div className="rightSideBar fRight">
      <div className='rightSideBarRect  absolute rounded-[15px] border border-zinc-500 border-opacity-25'/>
      <div className="innerRect fRight w-[306px] h-[667.71px]  absolute ">
          <div className="heading headingFollow">
            Recent Followers
            <div className="followers">
              <div className='followerImage1 followerImage'/>
              <div className="followerName">
                <p>Jason Haider <br/> <span className='userId'>@jaison_haider</span></p>
              </div>
              <button className='acceptButton'>Accept</button>
            </div>
            <div className="followers">
              <div className='followerImage2 followerImage'/>
              <div className="followerName">
                <p>ux wing <br/> <span className='userId'>@ux_wing</span></p>
              </div>
              <button className='acceptButton'>Accept</button>
            </div>
            <div className="followers">
              <div className='followerImage3 followerImage'/>
              <div className="followerName">
                <p>Illustration <br/> <span className='userId'>@illu_work</span></p>
              </div>
              <button className='acceptButton'>Accept</button>
            </div>
            <div className="followers">
              <div className='followerImage4 followerImage'/>
              <div className="followerName">
                <p>Art academy <br/> <span className='userId'>@art_work</span></p>
              </div>
              <button className='acceptButton'>Accept</button>
            </div>
            </div>
          <div className="heading headingSuggest">
            Suggested For You
            <div className="suggestFollowers">
              <div className='suggestFollowerImage1 followerImage'/>
              <div className="suggestFollowerName">
                <p>UI Creators<br/> <span className='userId'>@ui_creators</span></p>
              </div>
              <button className='followButton'>Follow</button>
            </div>
            <div className="suggestFollowers">
              <div className='suggestFollowerImage2 followerImage'/>
              <div className="suggestFollowerName">
                <p>Twin UI<br/> <span className='userId'>@ui_twin</span></p>
              </div>
              <button className='followButton'>Follow</button>
            </div>
            <div className="suggestFollowers">
              <div className='suggestFollowerImage3 followerImage'/>
              <div className="suggestFollowerName">
                <p>UXUI Topics<br/> <span className='userId'>@ui_topics</span></p>
              </div>
              <button className='followButton'>Follow</button>
            </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default RightSideBar