import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import axios from "axios";


export default function Profile() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrmLkIUYDAeYXBOsCb36aW_u6MYXhPdR6tQ&s"} //  `${PF}post/3.jpeg` || 
                alt=""
              />
              <img
                className="profileUserImg"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRkHpDWWcWaYokBdzRxpWmKuSN7JLKK4_WaRT2A9E_LzrVc6E94fe8AQYFyYOxV3trys&usqp=CAU"} //`${PF}person/7.jpeg`
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Egr Asad Butt</h4>
                <span className="profileInfoDesc">Hi It's me!</span> <br/> <span> MERN Stack Developer  </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}