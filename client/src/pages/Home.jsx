import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome to gaming Event</h1>
        <Link to={"/signup"}>
          <button className='newbtn'>New User</button>
        </Link>
      </div>
    </div>
  );
}
