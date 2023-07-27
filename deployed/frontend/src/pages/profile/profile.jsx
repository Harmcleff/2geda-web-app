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
import  Update  from '../../components/update/Update';
import "../../components/update/Update.scss"
import blankCover from "../../assets/img/prof.jpeg"
import blankProfile from "../../assets/img/avatar.png"
const profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser, logout } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split("/")[2])

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
    makeRequest.get("/posts/count/"  + userId).then(res => {
      return res.data;
    })

  );
  
  const { data: countrelationships } = useQuery(["countrelationships"], () =>
  makeRequest.get("/relationships/count/"  + userId).then(res => {
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
  
  if(openUpdate) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  console.log(data?.instagram)
  return (
    <div className="profile">
      <div className="images">
        <img src={data?.coverPic === '' ? (blankCover) :("/upload/" + data?.coverPic)} alt="" className="cover" />
        <img src={data?.profilePic === '' ? (blankProfile) :("/upload/" + data?.profilePic)} alt="" className="profilePic" />
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
                <span>{countrelationships?.length}{countrelationships?.length === 1000 ? "K Followers" : (countrelationships?.length <= 1 ? " Follower" : " Followers") }</span>
              </div>
              <div className="item">
                <span>•</span>
              </div>
              <div className="item">
                <span>{countPost?.length} Posts</span>
              </div>
               
            </div>
            {userId === currentUser.id
              ? (<button onClick={()=>{setOpenUpdate(true)}} >Edit profile</button>)
              : <button onClick={handleFollow}>{relationshipData?.includes(currentUser.id) ? "Following" :  " Follow"}</button>}
          </div>
          <div className="right">
          
            <EmailIcon />
           
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="profPost">
        <Posts userId={userId}/>
      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} openUpdate={openUpdate}/>}
    </div>
  )
}

export default profile;