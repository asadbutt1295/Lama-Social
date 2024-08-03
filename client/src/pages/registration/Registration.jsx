import "./registration.css";
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom"; // Updated import statement
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Registration() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const navigate = useNavigate(); // Updated hook

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords do not match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login"); // Updated navigation
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lama Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Lama Social.</span>
                </div>
                <div className="loginRight">
                    <form onSubmit={handleClick} className="loginBox">
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength={6} />
                        <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/login">
                        <button className="loginRegisterButton">Log into account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
