import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useLocation } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import "./profile.scss"
import { Posts } from "../../components/posts/Posts";
import { makeRequest } from '../../axios'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext';
import { useContext, useState } from 'react';
import Update from '../../components/update/Update';
import { ShowStoriesContext } from "../../context/showStoriesContext";
import "../../components/update/Update.scss"
import blankCover from "../../assets/img/prof.jpeg"
import blankProfile from "../../assets/img/avatar.png"
import useDebounce from '../../components/hooks/useDebounce'
const profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser, logout } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split("/")[2])
  const prof = useLocation().pathname.split("/")[1]

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then(res => {
      return res.data;
    })

  );

  const { data: relationshipData } = useQuery(["relationship"], () =>
    makeRequest.get("/relationships?followedUserId=" + userId).then(res => {
      return res.data;
    })

  );

  const { data: countPost } = useQuery(["count"], () =>
    makeRequest.get("/posts/count/" + userId).then(res => {
      return res.data;
    })

  );

  const { data: countrelationships } = useQuery(["countrelationships"], () =>
    makeRequest.get("/relationships/count/" + userId).then(res => {
      return res.data;
    })

  );

  const queryClient = useQueryClient()

  const mutation = useMutation(
    (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['relationship'])
        queryClient.invalidateQueries(['countrelationships'])
      },
    }
  )

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
  }

  if (openUpdate) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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
  console.log(userId === currentUser.id)
  console.log(userId)
  console.log(currentUser.id)
  console.log(prof === "profile")
  return (
    <div className="profile">
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
      <div className="images">
        <img src={data?.coverPic === '' || null || undefined ? (blankCover) : ("/upload/" + data?.coverPic)} alt="" className="cover" />
        <img src={data?.profilePic === '' || null || undefined ? (blankProfile) : ("/upload/" + data?.profilePic)} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <div className="item">
              <Link to={`https://instagram.com/${data?.instagram}`}>
                <InstagramIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to={`https://facebook.com/${data?.facebook}`}>
                <FacebookIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to={`twitter.com/${data?.twitter}`}>
                <TwitterIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to={`https://linkedin.com/${data?.linkedin}`}>
                <LinkedInIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className="center">
            <span>{data?.name}</span>
            <div className="info">
              <div className="item">
                <span>{countrelationships?.length}{countrelationships?.length === 1000 ? "K Followers" : (countrelationships?.length <= 1 ? " Follower" : " Followers")}</span>
              </div>
              <div className="item">
                <span>•</span>
              </div>
              <div className="item">
                <span>{countPost?.length} Posts</span>
              </div>

            </div>
            {userId === currentUser.id
              ? (<button onClick={() => { setOpenUpdate(true) }} >Edit profile</button>)
              : <button onClick={handleFollow}>{relationshipData?.includes(currentUser.id) ? "Following" : " Follow"}</button>}
          </div>
          <div className="right">

            <EmailIcon />

            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="profPost">
        <Posts userId={userId} />
      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} openUpdate={openUpdate} />}
    </div>
  )
}

export default profile;