import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import "./navbar.scss"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ProfImg from "../../assets/img/prof.jpeg"
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { AuthContext } from "../../context/authContext";
import '../../style.scss'
import { makeRequest } from "../../axios";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import blankProfile from "../../assets/img/avatar.png"
import axios from 'axios';
import useDebounce from '../hooks/useDebounce'
import Home from '../../pages/home/Home';
import { ShowStoriesContext } from '../../context/showStoriesContext';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


const navbar = () => {
  const nav = useNavigate();
  const prof = useLocation().pathname.split("/")[1]
  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logout } = useContext(AuthContext);
  const { showStories, showHide } = useContext(ShowStoriesContext)
  const [search, setSearch] = useState("")
  const [myData, setmyData] = useState([]);
  const [isLoadin, setIsLoadin] = useState(true);
  const [erro, setErro] = useState(null);

  const { isLoading, error, data } = useQuery(["NavUser"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then(res => {
      return res.data;
    })

  )



  const handleClick = () => {
    localStorage.removeItem("user");
    window.location.reload();

  }

  const debouncedSearchTerm = useDebounce(search, 200)

  const { isLoading: searchLoading, error: searchError, data: searchData } = useQuery(['search', debouncedSearchTerm], () =>

    makeRequest.get(`/users/search?search=${debouncedSearchTerm}`).then(res => {
      return res.data;

    })

  )
  const navigate = useNavigate()
  const handRefresh = (id) => {

    setSearch("")
  }

  // const handReload = () => {
  //   searchData.map((ds) => (
  //     // navigate()

  //     window.location.href = `#/profile/${ds.id}`

  //   ))
  //   setTimeout(window.location.reload(), 1000)
  // }
  // const myId =

    console.log(searchLoading)
  console.log(searchData?.id)
  console.log(prof === "profile")
  return (
    <div className="navbar navhide">
      <div className="leftbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span >2geda</span>
        </Link>





      </div>
      <div className="centerbar">
        <div className="search">
          <SearchRoundedIcon />
          <input type="search" value={search} placeholder='Search 2geda' onChange={(e) => setSearch(e.target.value)} />

        </div>
        <div className='searchResult'>
          {search && (searchLoading
            ? "Loading"
            : searchData?.map((item) => (

              <div className='arrange' key={item.id}>
                <Link to={`/profile/${item?.id}`} onClick={handRefresh} style={{ textDecoration: "none", color: 'inherit' }}>
                  <p>{item.name}</p>
                  <p>{item.username}</p>
                  <img src={"/upload/" + item.profilePic} alt="" />
                </Link>
              </div>
            )))}

        </div>


      </div>
      <div className="rightbar">

        <div className="icon">{darkMode ? <LightModeRoundedIcon onClick={toggle} /> : <DarkModeRoundedIcon onClick={toggle} />}</div>
        <div className="icon3">{showStories ? <CancelOutlinedIcon onClick={showHide} /> : <SearchRoundedIcon onClick={showHide} />}</div>
        <Link to={`/profile/${data?.id}`} style={{ textDecoration: "none", color: 'inherit' }}><div className="icon2"><PersonRoundedIcon /></div></Link>
        <button className='logout' onClick={handleClick}>Log out </button>

        <div className="user">
          <div className="sear" style={{ display: "none" }}>
            <SearchRoundedIcon />
          </div>
          {prof !== "profile" ? <Link to={`/profile/${data?.id}`}>
            <img src={data?.profilePic === '' || null || undefined ? (blankProfile) : ("/upload/" + data?.profilePic)} alt='' />
          </Link> : <img src={data?.profilePic === '' || null || undefined ? (blankProfile) : ("/upload/" + data?.profilePic)} alt='' /> }
        </div>
      </div>

    </div>

  )
}


export default navbar