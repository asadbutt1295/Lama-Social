import React, { useContext } from 'react';
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {AuthContext} from "../../context/AuthContext";


export default function Share() {
    const {user}= useContext(AuthContext);



  return (
    <div className='share'>

        <div className="shareWrapper">
           
           <div className="shareTop">
            <img className='shareprofileImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRkHpDWWcWaYokBdzRxpWmKuSN7JLKK4_WaRT2A9E_LzrVc6E94fe8AQYFyYOxV3trys&usqp=CAU" alt="" />
            <input className='shareInput' placeholder="What's in your mind?" name="" id="" />
           </div>


           <hr className='shareHr' />


           <div className="shareBottom">
            <div className="shareOptions">
                

                <div className="shareOption">

                    <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                    <span className='shareoptionText'>Photo or Video</span>


                </div>

                <div className="shareOption">

                    <LocationOnIcon htmlColor='blue' className='shareIcon' />
                    <span className='shareoptionText'>Location</span>


                </div>

                <div className="shareOption">

                    <LabelIcon htmlColor='green' className='shareIcon' />
                    <span className='shareoptionText'>Tag</span>


                </div>

                <div className="shareOption">

                    <EmojiEmotionsIcon htmlColor='gold' className='shareIcon' />
                    <span className='shareoptionText'>Feelings</span>


                </div>

                


            </div>

            <button className='shareButton'>Share</button>


           </div>



        </div>

        



    </div>
  )
}
