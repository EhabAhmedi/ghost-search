import React, { createContext, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";
import Switch from '@mui/material/Switch';
import { Button } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ThemeContext=createContext(null)



function Home() {

  const [theme, setTheme]=useState("dark")
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light" ? "dark":"light"))
  };
 
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div  className="home" id={theme}>
      <div className="home__header">
        <div className="home__headerLeft">
          
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>

          <Button className="DarkTheme__logo">
          <img  onClick={toggleTheme} checked={theme==="dark"} className="Home__darkButton" src="./pictures/dark" alt="" />
          <p > {theme==="light" ?"Light " : "Dark "}</p>

          </Button>
          

          
          

        </div>
        
        <div className="home__headerRight">
        <Link to={{ pathname: "https://ghost-mail.netlify.app" }} target="_blank" >Ghost Mail</Link>
        <div>
          
    
    </div>
    
        


          <Link to="/images">Images</Link>
          <AppsIcon className="avatar"/>
          <AccountCircleIcon className="avatar"></AccountCircleIcon>
        </div>
        
      </div>
      

      <div className="home__body">
        <img className="Home__logo"
        src="./pictures/logo"
          alt=""
        />

        <div className="home__inputContainer">
          <Search />
          
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default Home;
