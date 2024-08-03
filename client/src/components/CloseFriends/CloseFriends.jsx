import "./closefriends.css";

export default function CloseFriends(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
                    <img className="sidebarfriendImage" src={PF+props.profilePicture} alt="" /> 
                    <span className="sidebarfriendName" >{props.username} </span>
                </li>
  )
}
