import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import image from "./movieicon.png";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img src={image} width={50} alt="header__icon"></img>
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
  );
}
