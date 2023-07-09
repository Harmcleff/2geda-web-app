import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
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

const profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/13069183/pexels-photo-13069183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <div className="item">
              <Link to='https://instagram.com'>
                <InstagramIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to='https://facebook.com'>
                <FacebookIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to='https://twitter.com'>
                <TwitterIcon fontSize='large' />
              </Link>
            </div>
            <div className="item">
              <Link to='https://linkedin.com'>
                <LinkedInIcon fontSize='large' />
              </Link>
            </div>
          </div>
          <div className="center">
            <span>Jamal san</span>
            <div className="info">
              <div className="item">
                <span>20.5K Followers</span>
              </div>
              <div className="item">
                <span>•</span>
              </div>
              <div className="item">
                <span>     20 Posts</span>
              </div>

            </div>
            <button><FontAwesomeIcon icon={faFolderPlus} />Follow</button>
          </div>
          <div className="right">
            <EmailIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="profPost">
      <Posts/>
      </div>
    </div>
  )
}

export default profile;