import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./LandingImage.module.css";

export default function LandingImage() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className={styles.container} id="landing_img">
       <img src="/imgs/bg-1.jpg" alt="Background" className={styles.backgroundImage} />
     
      <div className={styles.navbarElementsContainer}>
        <Link to="/About">
          <h5 className={`${styles.navbarElement} me-5`}>About</h5>
        </Link>
        <Link to="/Contact">
          <h5 className={`${styles.navbarElement} me-5`}>Contact</h5>
        </Link>
        <Link to="/Profile">
          {currentUser ? (
            <h5 className={`${styles.navbarElement} whitespace-nowrap`}>
              Profile
            </h5>
          ) : (
            <h5 className={`${styles.navbarElement} whitespace-nowrap`}>
              Sign in
            </h5>
          )}
        </Link>
      </div>
      <h2 className={styles.header}>
        Unlocking doors <br /> to your dream home
      </h2>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchIcon}>
          <FaSearch  />
        </button>
      </form>
    </div>
  );
}
