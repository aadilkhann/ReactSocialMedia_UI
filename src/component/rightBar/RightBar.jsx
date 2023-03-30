import React from 'react'
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>

          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <span>Aditi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <span>Aditi</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          
          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <p>
              <span>Aditi </span>changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <p>
              <span>Aditi </span>liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <p>
              <span>Aditi </span>liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <div className="online"/>
              <span>Aditi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://www.pinkvilla.com/imageresize/dua_lipa_1.jpg?width=752&t=pvorg" alt="" />
              <div className="online"/>
              <span>Aditi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
