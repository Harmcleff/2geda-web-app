import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import "./navbar.scss"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Link, useNavigate } from 'react-router-dom';
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

const navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logout } = useContext(AuthContext);
  const [search, setSearch] = useState("mido")
  const [myData, setmyData] = useState(null);
  const [isLoadin, setIsLoadin] = useState(true);
  const [erro, setErro] = useState(null);

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

  const handleChange = (e) => {
    setSearch(...prev)
  }
  
  const { isLoading:searchLoading, error:searchError, data:searchData } = useQuery(['posts'], () =>

    makeRequest.get(`/users/search?search=${search}`).then(res => {
      return res.data;

    })

  )

  // const { data: searchPost } = useQuery(["searchPost"], () =>
  //   makeRequest.get(`/users/search?search=${search}`).then(res => {
  //     return res.data;
  //   })

  // )

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://2geda.tech/api/v1/users/search?search=${search}`);
  //       setmyData(response.data);
  //     } catch (error) {
  //       setErro(error);
  //     } finally {
  //       setIsLoadin(false);
  //     }
  //   };

  //   fetchData();
  // }, [search]);

  console.log(searchData)
  console.log(searchLoading)
  console.log(searchError)
  console.log(typeof JSON.stringify(search))

  const date = [
    {
      id: 1,
      name: "hammed"
    }
  ]
  return (
    <div className="navbar">
      <div className="leftbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span >2geda</span>
        </Link>





      </div>
      <div className="centerbar">
        {/* <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder='Search 2geda' onChange={(e) => setSearch(e.target.value)} />
          <div>
            {Array.isArray(myData) && myData.length > 0 ? (
              myData.map((item) => (
                <div key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <div>No data available.</div>
            )}
            
          </div>
          </div>

        </div> */}
        <div className="rightbar">
          <div className="icon">{darkMode ? <LightModeRoundedIcon onClick={toggle} /> : <DarkModeRoundedIcon onClick={toggle} />}</div>
          <Link to={`/profile/${data?.id}`} style={{ textDecoration: "none", color: 'inherit' }}><div className="icon"><PersonRoundedIcon /></div></Link>
          <button className='logout' onClick={handleClick}>Log out </button>

          <div className="user">
            <div className="sear" style={{ display: "none" }}>
              <SearchRoundedIcon />
            </div>
            <Link to={`/profile/${data?.id}`}>
              <img src={data?.profilePic === '' ? (blankProfile) : ("/upload/" + data?.profilePic)} alt='' />
            </Link>
          </div>
        </div>
      </div>
      </div>
      )
}


      export default navbar