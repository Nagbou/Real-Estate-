import React from "react";
import "./AboutStyles.css"; // Make sure to import your external CSS

const About = () => {
  return (
    <div>
      <div className="about_header">
        <h1 className="vertical_yellow_box">About Us</h1>
      </div>
      <div className="about_section mb-20" id="about_section">
        <h2 className="about_section_header vertical_yellow_box">
          Who are we?
        </h2>
        <p className="about_section_para vertical_yellow_box mt-3">
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
      <div className="flex flex-wrap beliefs_section mt-10 mb-20">
        <img src="imgs/H (13).jpg" alt="" className="w-1/2 img_beliefs" />
        <div className="w-5/12 ml-4">
          <h2 className="beliefs_section_header vertical_yellow_box ps-3">
            Our beliefs
          </h2>
          <p className="beliefs_section_para vertical_yellow_box mt-3 ps-3">
            At our core, we believe in integrity, transparency, and excellence.
            These values guide everything we do, from our interactions with
            clients to our approach to business. We believe in building lasting
            relationships based on trust and mutual respect, prioritizing our
            clients' needs above all else. With a commitment to professionalism
            and innovation, we strive to exceed expectations and deliver
            exceptional results. Our belief in continuous improvement drives us
            to stay ahead of the curve and adapt to the ever-changing real
            estate landscape. At [Agency Name], we are dedicated to upholding
            these beliefs as we work tirelessly to serve our clients and
            communities with integrity and dedication.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap leaders_section mt-10 mb-20">
        <div className="w-5/12">
          <h2 className="leaders_section_header vertical_yellow_box ps-3">
            Our leaders
          </h2>
          <p className="leaders_section_para vertical_yellow_box mt-3 ps-3 ">
            At the helm of Mahmoud's agency, our leaders embody a wealth of
            expertise, passion, and dedication to excellence. With years of
            experience in the real estate industry, they bring visionary
            leadership and a commitment to delivering unparalleled service to
            our clients. Their strategic insights and forward-thinking approach
            guide our team to success, ensuring that we remain at the forefront
            of the market. With a focus on innovation and growth, our leaders
            inspire and empower our team to reach new heights and exceed
            expectations. Meet the driving force behind [Agency Name], where our
            leaders are committed to shaping the future of real estate and
            helping our clients achieve their goals.
          </p>
        </div>
        <div className="w-7/12 flex flex-wrap mt-20">
          <div className="w-1/2">
            <img
              src="imgs/TM (4).jpg"
              alt=""
              className="w-10/12 img_leaders img_solo ms-11 "
            />
          </div>
          <div className="w-1/3 flex flex-col ms-11 ">
            <img src="imgs/TM (1).jpg" alt="" className="w-10/10 img_leaders" />
            <img
              src="imgs/TM (2).jpg"
              alt=""
              className="w-10/10 img_leaders mt-2"
            />
          </div>
        </div>
      </div>
      <div className="counter_section">
        <div className="counter">
          +15 <br /> Agents
        </div>
        <div className="counter">
          +125 <br /> Estates
        </div>
        <div className="counter">
          +25 <br /> States
        </div>
      </div>
      <div className="fixed bottom-20 right-30">
        <i
          className="fa-solid fa-address-book contact_btn"
          id="contact_btn"
          title="get help"
        ></i>
        <i
          className="fa-solid fa-house home_btn"
          id="home_btn"
          title="exit"
        ></i>
      </div>
    </div>
  );
};

export default About;
