import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                navigate("/")
            })
            .catch(error=>alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //successfully created an user with email and password
                console.log(auth);
                if(auth) navigate("/");
            })
            .catch(error=>alert(error.message));
    }

    return <div className="login">
        {/*<Link to='/'>
            <h2 className="login__logo">APP LOGO</h2>
        </Link>*/}
        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                <button onClick={signIn} type="submit" className="login__signInButton">
                    Sign in
                </button>
            </form>
            <p>By signing-in, you agree to the Conditions of use and Policies.</p>
            <button className="login__registerButton" onClick={register}>Create a new Account</button>
        </div>
    </div>
}

export default Login;