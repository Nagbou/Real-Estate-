import React from "react";
import styles from "./AboutSection.module.css";
import { Link } from "react-router-dom";
const AboutSection = () => {
  const goAbout = () => {
    console.log("Navigating to the About page...");
  };

  return (
    <div
      className={`${styles.about_section} flex flex-wrap`}
      id="about_section"
    >
      <div className="w-full md:w-1/2 p-4">
        <h2
          className={`${styles.about_section_header} ${styles.vertical_yellow_box}`}
        >
          Who we are?
        </h2>
        <p
          className={`${styles.about_section_para} ${styles.vertical_yellow_box} mt-3`}
        >
          Welcome to Mahmoud’s agency, where excellence meets expertise in real
          estate. With a passion for matching clients with their ideal
          properties, we specialize in providing tailored solutions and
          unparalleled service. Backed by a team of seasoned professionals, we
          are dedicated to guiding you through every step of your real estate
          journey, ensuring a seamless and rewarding experience. Whether you're
          buying, selling, or investing, trust us to exceed your expectations
          and unlock the door to your dream property.
        </p>
      </div>
      <div className={`${styles.learn_more} w-full md:w-4/12 p-4 relative`}>
        <img
          src="imgs/HC (2).jpg"
          alt="About"
          className={`${styles.img_about} ${styles.hover_image}`}
        />
        <Link to="/About">
          <button className={styles.view_more} onClick={goAbout}>
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
