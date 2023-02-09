
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import { Button } from "@mui/material";



function App() {
 

  return (
    
        
    <div  className="App" >
      <Router>
        <Switch>
          <Route path="/search">
            
            <SearchPage />
            

          </Route>
          <Route path="/">
            {" "}
            
            <Home />{" "}
            
          </Route>
        </Switch>
      </Router>
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
