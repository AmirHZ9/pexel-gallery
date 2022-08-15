import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/Links.module.css"
export default function Links() {
  return (
    <div className={style.links}> 
      <div >
        <ul className={style.list}>
          <li>
            <Link className={style.homeLink} to="/">Home</Link>
          </li>
          <li>
            <Link to="/Videos">Videos</Link>
          </li>
          <li>
            <Link to="/Leaderboard">LeaderBoard</Link>
          </li>
          <li>
            <Link to="/Challenges">Challenges</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
