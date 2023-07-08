import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./profile.scss"

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
                <PlaceIcon fontSize='small' />
                <span>Nigeria</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize='small' />
                <span>cleff.dev</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile;