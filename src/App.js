import "./App.css";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import {Layout} from './components/Layout' 
function App() {

  const [login,setLogin] = useState({
    userId:"",
    userName:"",
    isLoggedIn:false
  })
useEffect(()=>{
  if(window.localStorage.getItem('userId')){
    setLogin({
      userId:window.localStorage.getItem('userId'),
      userName:window.localStorage.getItem('userName'),
      isLoggedIn:true
    })
  }
  
},[])
  return (
    <Router>
      <React.Fragment>
      <Layout/>
     </React.Fragment>
     </Router>
  );
}

export default App;
