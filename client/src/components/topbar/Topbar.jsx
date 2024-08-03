import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/"  className="abc">
        <span className="logo"> LamaSocial </span>
        </Link> 
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friends, posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink"> Homepage </span>
          <span className="topbarLink"> Timeline </span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItems">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to="/profile/safak">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRkHpDWWcWaYokBdzRxpWmKuSN7JLKK4_WaRT2A9E_LzrVc6E94fe8AQYFyYOxV3trys&usqp=CAU"
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}


export default Topbar;