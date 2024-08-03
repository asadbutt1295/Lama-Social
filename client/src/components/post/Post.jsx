import React, {useState, useEffect} from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
// import { format } from 'timeago.js';
import {Link} from "react-router-dom";



import "./post.css";

export default function Post(post) {

  const [like, setLike] = useState(post.like.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`users/${post.userId}`); 
        setUser(res.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching user:", error); // Log any errors
      }
    };
    fetchUser();
  }, [post.userId]); 


  const handleLikeClick = () => {
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLiked(!liked);
  };

    return (

        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="posttopLeft">

                       <Link to={`/profile`}> {/*  ${user.username} */}

                        <img className='postprofileImage' src={user.profilePicture  || PF+"person/noAvatar.png"} alt="" />
                         
                      </Link>
                         <span className="postuserName">


                            {user.username}
                            
                            
                         </span>
                         {/* <span> {format(post.createdAt)} </span> */}
                    </div>
                    <div className="posttopRight"></div>


                </div>


                <div className="postCenter">
                    <span className="postText"> { post?.desc } </span> <br />
                    <img src= {PF+post.photo} alt="" className="postImg" />
                </div>
 

                <div className="postBottom">
                    <div className="postbottomLeft">
                        <ThumbUpAltIcon onClick={handleLikeClick} className="likeIcon" />
                        <FavoriteIcon   onClick={handleLikeClick}  className="likeIcon" />
                        <span className="postlikeCounter">{like} people like it</span>
                    </div>
                    <div className="postbottomRight">
                        <span className="postcommentText">{post.comment} comments</span>
                    </div>
                </div>


            </div>
        </div>

    );


}
 

