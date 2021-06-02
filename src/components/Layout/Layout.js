import React,{useEffect,useState} from 'react'
import {HomePage} from '../User'
import {AdminHomePage} from '../Admin'
import {Login,Signup} from '../Registration'
import {Navbar} from '../Common'
import {Route} from 'react-router-dom';
export default function Layout() {

    const [user,setUser]=useState({
        userName:"",
        role:"",
        isLoggedIn:false
    })
    useEffect(()=>{
        if(window.localStorage.getItem('userId')){

          setUser({
            userName:window.localStorage.getItem('userName'),
            role:window.localStorage.getItem('userId'),
            isLoggedIn:true
          })
        }
        
      },[])
    
    return (
        <React.Fragment>
        <Navbar loginInfo={user}/>
        <Route path="/" exact render={()=>(<HomePage/>)}/>
        <Route path="/admin" render={()=>(<AdminHomePage/>)}/>
        <Route path="/login" render={()=>(<Login setUser={setUser}/>)}/>
        <Route path="/signup" render={()=>(<Signup/>)}/>
        </React.Fragment>
    )
}
