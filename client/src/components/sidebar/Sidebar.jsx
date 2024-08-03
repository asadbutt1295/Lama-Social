import React from "react";
import CloseFriends from "../../components/CloseFriends/CloseFriends";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Groups3Icon from '@mui/icons-material/Groups3';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkIcon from '@mui/icons-material/Work';
import EventNoteIcon from '@mui/icons-material/EventNote';
import {Users} from "../../dummyData";

import "./sidebar.css";

function Sidebar() {

    return (

        <div className="sideBar"> 
        
         <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarlistItems">
                   <RssFeedIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Feed </span>
                    

                </li>
                <li className="sidebarlistItems">
                   <ChatIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Chats </span>
                    

                </li>
                <li className="sidebarlistItems">
                   <VideoLibraryIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Videos </span>
                    

                </li>
                <li className="sidebarlistItems">
                   <Groups3Icon className="iconMargin" />
                   <span className="sidebarlistitemText"> Groups </span>
                    

                </li>
                <li className="sidebarlistItems">
                   <BookmarksIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Bookmarks </span>
                    

                </li>   
                <li className="sidebarlistItems">
                   <QuizIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Questions </span>
                    

                </li>   
                <li className="sidebarlistItems">
                   <WorkIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Jobs </span>
                    

                </li>   
                <li className="sidebarlistItems">
                   <EventNoteIcon className="iconMargin" />
                   <span className="sidebarlistitemText"> Events </span>
                    

                </li>   
            </ul>

            <button className="sidebarButton">Show More</button>

            <hr className="sidebarHr" />


            <ul className="sidebarfriendList">

                {Users.map(w=> (
                    <CloseFriends 
                    key={w.id}
                    profilePicture={w.profilePicture}
                    username={w.username}
                    
                    
                    />




                ))}

                


            </ul>


         </div>
         
        </div>
    );

    
}

export default Sidebar;