import './Profile.scss'
import dp from './dp.jpg'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../component/posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="image">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cover" className='cover' />
        <img src={dp} alt="dp" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon  />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon />
            </a>
          </div>
          <div className="center">
            <span>Adil Khan</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>khan01970@gmail.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
