import ProfImg from "../../assets/img/prof.jpeg"
import "./leftbar.scss"
import Events from "../../assets/icons/events.png";
import Friends from "../../assets/icons/friends.png";
import Gallary from "../../assets/icons/gallary.png";
import Game from "../../assets/icons/game.png";
import Groups from "../../assets/icons/groups.png";
import marketplace from "../../assets/icons/marketplace.png";
import Memories from "../../assets/icons/memories.png";
import Message from "../../assets/icons/message.png";
import Newsfeed from "../../assets/icons/newsfeed.png";
import Videos from "../../assets/icons/videos.png";
import Watch from "../../assets/icons/watch.png";
import Pages from "../../assets/icons/pages.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import { makeRequest } from "../../axios";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { Link } from "react-router-dom";
import blankProfile from "../../assets/img/avatar.png"

const leftbar = () => {
  const { currentUser } = useContext(AuthContext);


  const { isLoading, error, data } = useQuery(["leftUser"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then(res => {
      return res.data;
    })

  )


  console.log(data)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={data?.profilePic === '' ? (blankProfile) :("/upload/" + data?.profilePic)} />
            <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: 'inherit' }}>
            <span >{data?.name}</span>
            </Link>
          </div>
          {/* <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div> */}
         
        </div>
        <hr />
        <div className="menu">
          
          
          {/* <div className="item">
            <img src={Gallary} alt="" />
            <span>Gallary</span>
          </div>
           */}
          


        </div>


      </div>
    </div>
  )
}

export default leftbar;