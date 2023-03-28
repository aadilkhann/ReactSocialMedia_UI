import './navBar.scss'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{textDecoration:"none"}}>
          <span>Sociify</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src='https://media.licdn.com/dms/image/D4D03AQEzfj1xfMN8ZQ/profile-displayphoto-shrink_800_800/0/1664542995288?e=1685577600&v=beta&t=yvunAEvizGkIGd781Ut6QzcUA_-qT3mrTXpcKuIn1-g'/>
          <span>Adil Khan</span>

        </div>
      </div>
    </div>
  )
}

export default NavBar
