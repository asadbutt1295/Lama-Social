import "./login.css";
import React, { useContext, useRef } from 'react';
import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";



export default function Login() {

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch, user } = useContext(AuthContext);

    const handleClick = (e)=> {
        e.preventDefault();
        loginCall(
            {email:email.current.value, password:password.current.value}
            ,dispatch);
    };

    console.log(user);


  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lama Social</h3>
                <span className="loginDesc">Connect with friends and the world around on lamasocial</span>
            </div>
            <form className="loginRight" onSubmit={handleClick}>
                <div className="loginBox">
                    <input placeholder="Email" type="Email" className="loginInput" ref={email} required />
                    <input placeholder="Password" type="Password" className="loginInput" ref={password} required  minLength={6}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>
                    {isFetching ? ( "loading..." ) : ("Log In")}
            </button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a new account </button>
                </div>
            </form>


        </div>
    </div>
  )
}
