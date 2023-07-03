import ProfImg from "../../assets/img/prof.jpeg"
import "./leftbar.scss"
import Events from "../../assets/icons/events.png";
import Friends from "../../assets/icons/friends.png";
import Gallary from "../../assets/icons/gallary.png";

 const leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
        <div className="user">
         { <img src={ProfImg}/>}
          <span>Mido cleff</span>
        </div>
          
  
        </div>
        
        
      </div>
    </div>
  )
}

export default leftbar;