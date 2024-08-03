import { useEffect, useState } from "react";
import Share from "../../components/share/Share"; 
import Post from "../../components/post/Post";
import "./feed.css";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts/timeline/66a9922c468dd33ad88a0405");
        setPosts(res.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching posts:", error); // Log any errors
      }
    };
    fetchPosts();
  }, []); 

  return (
    <div className="feed">  
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post 
            key={p._id}
            userId={p.userId}
            desc={p.desc}
            photo={p.img}
            like={p.likes}
            date={p.createdAt}
            // comment={p.comment}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
