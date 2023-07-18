import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import "./navbar.scss"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Link, useNavigate } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ProfImg from "../../assets/img/prof.jpeg"
import { useContext } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { AuthContext } from "../../context/authContext";
import '../../style.scss'
import { makeRequest } from "../../axios";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import blankProfile from "../../assets/img/avatar.png"

const navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logout } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["NavUser"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then(res => {
      return res.data;
    })

  )


  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();

  }

  console.log(data)
  return (
    <div className="navbar">
      <div className="leftbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span >2geda</span>
        </Link>





      </div>
      <div className="centerbar">
        <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder='Search 2geda' />
        </div>

      </div>
      <div className="rightbar">
        <div className="icon">{darkMode ? <LightModeRoundedIcon onClick={toggle} /> : <DarkModeRoundedIcon onClick={toggle} />}</div>
        <Link to={`/profile/${data?.id}`} style={{ textDecoration: "none", color: 'inherit' }}><div className="icon"><PersonRoundedIcon /></div></Link>
        <button className='logout' onClick={handleClick}>Log out </button>

        <div className="user">
          <div className="sear" style={{ display: "none" }}>
            <SearchRoundedIcon />
          </div>
          <Link to={`/profile/${data?.id}`}>
            <img src={data?.profilePic === '' ? (blankProfile) :("/upload/" + data?.profilePic)} alt='' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default navbar