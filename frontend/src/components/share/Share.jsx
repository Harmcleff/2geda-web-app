import React, { useContext } from 'react'
import "./share.scss"
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import  Photo  from "../../assets/icons/addphoto.png";


export const Share = () => {
  const { currentUser } = useContext(AuthContext);

  const name = `What's on your mind, + {currentUser.name}`
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <div className="bg"></div>
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Photo} alt="" />
                <span>Add Image</span>
              </div>
            </label>


          </div>
          <div className="right">
            <button><FontAwesomeIcon icon={faPaperPlane} />Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

