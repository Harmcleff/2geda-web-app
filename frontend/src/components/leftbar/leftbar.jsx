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

const leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {<img src={ProfImg} />}
            <span>Mido cleff</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Pages} alt="" />
            <span>Pages</span>
          </div>
          <div className="item">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Game} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallary} alt="" />
            <span>Gallary</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span>Massages</span>
          </div>
          
          
        </div>
  
        
      </div>
    </div>
  )
}

export default leftbar;