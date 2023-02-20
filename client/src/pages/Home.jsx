import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Now Book your favourite game and event</h1>
        <Link to={"/signup"}>
          <button className='newbtn'>New User</button>
        </Link>
      </div>
    </div>
  );
}
