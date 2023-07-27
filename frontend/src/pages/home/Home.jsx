import { Link, Outlet } from "react-router-dom";
import "./home.scss"
import { Stories } from "../../components/stories/Stories";
import { Posts } from "../../components/posts/Posts";
import { Share } from "../../components/share/Share";
import { useContext, useState } from "react";
import { ShowStoriesContext } from "../../context/showStoriesContext";
import Showstore from '../../components/showstories/showstories';
import useDebounce from '../../components/hooks/useDebounce'
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const [search, setSearch] = useState("")
  const { showStories, showHide } = useContext(ShowStoriesContext)



  const debouncedSearchTerm = useDebounce(search, 200)

  const { isLoading: searchLoading, error: searchError, data: searchData } = useQuery(['search', debouncedSearchTerm], () =>

    makeRequest.get(`/users/search?search=${debouncedSearchTerm}`).then(res => {
      return res.data;

    })

  )

  const handRefresh = (id) => {

    setSearch("")
    showHide();
    
  }
  

  console.log(searchData)
  return (
    
    
    <div className="home">
      
      <div className="mobileSearch">
        {showStories && <input type="search" value={search} placeholder='Search 2geda' onChange={(e) => setSearch(e.target.value)} />}
        <div className='searchResult'>
          {showStories && search && (searchLoading
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

      <Share />


      <Posts />


    </div>
  );
};

export default Home;
