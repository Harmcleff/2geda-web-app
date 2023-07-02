import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import "./navbar.scss"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Link } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ProfImg from "../../assets/img/prof.jpeg"
const navbar = () => {
  return (
    <div className="navbar">
      <div className="leftbar">
        <Link to="/" style={{textDecoration:"none"}}>
        <span >2geda</span>
        </Link>
        
      </div>
      <div className="centerbar">
        <div className="search">
          <SearchRoundedIcon/>
        <input type="text" value="" placeholder='Search....'/>
        </div>
        
      </div>
      <div className="rightbar">
        <DarkModeRoundedIcon/>
        <GridViewRoundedIcon/>
        <NotificationsRoundedIcon/>
        <div className="user">
         { <img src={ProfImg}/>}
          <span>Mido cleff</span>
        </div>
      </div>
    </div>
  )
}

export default navbar