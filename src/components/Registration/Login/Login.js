import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function Login(props) {
    const {setUser} = props;
    const ROLE={
        ADMIN:"admin",
        USER:"user"
    }
    const [login,setLogin]=useState({
        email:"",
        password:""
    })
    const handleLogin=()=>{
        const {email,password} = login;
        axios.post("https://saif-connectify-backend.herokuapp.com/api/user/login",
        {email,password})
        .then(result=>{
                const {_id,firstName,role}=result.data.user;
                alert(`Hi ${result.data.user.firstName}! Welcome to the application`);
                window.localStorage.setItem('userId',_id);
                window.localStorage.setItem('userName',firstName)
                window.localStorage.setItem('role',role);
                setUser({username:firstName,role:role,isLoggedIn:false})
                if(role===ROLE.ADMIN){
                    window.location.replace('/admin');
                }
                if(role===ROLE.USER){
                    window.location.replace('/');
                }
            })
        .catch(err=>{
            alert(err.response.data.message)
        })
    }
    const handleChange=(e)=>{
        const value = e.target.value;
        setLogin({
            ...login,
            [e.target.name]:value})
    }
    return (
        <div className="container">
            <p className="primary-text">Already a member?</p>
              <h1 className="main-heading">Login</h1>
              <div className="formgroup">
                  <label htmlFor="email">Email</label>
                  <input 
                  type="text" 
                  name="email" 
                  onChange={handleChange} 
                  value={login.email}/>
              </div>
              <div className="formgroup">
                  <label htmlFor="password">Password</label>
                  <input 
                  type="password" 
                  name="password"
                  onChange={handleChange} 
                  value={login.password}/>
              </div>
              <button 
              className="btnprimary"
              onClick={handleLogin}
              >Login</button>
              <p className="primary-text">New here? <Link to="/signup">Register</Link></p>
        </div>
    )
}
