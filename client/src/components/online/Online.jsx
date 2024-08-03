import "./online.css";

export default function Online(props) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    
        
    <li className="rightbarFriend">

    <div className="rightbarProfileImgContainer">
      <img 
        src={PF+props.profilePicture} 
        alt="" 
        className="rightbarprofileImg" 
      />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{props.username}</span>

  </li>
  
  
  )
}
