import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { FaHome } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="  bg-[#0F4C5C] text-white font-serif">
      <div className="flex flex-col md:flex-row w-full">
        <img src="imgs/V (1).jpg" alt="Side" className="w-1/3 object-cover" />
        <div className="flex flex-col w-2/3 p-0 ">
          <div className="bg-[#1A1A2E] text-2xl font-bold p-8 mb-4">
            <div className={styles.verticalYellowBox}>Contact Us</div>
          </div>
          <p className={`${styles.contactInputSectionPara} mx-14 mt-10 w-1/7`}>
            Feel free to reach out to us at any time. Whether you have questions
            about our properties, want to schedule a viewing, or simply need
            assistance, our team is here to help. You can contact us via phone,
            email, or by filling out the contact form on our website. We look
            forward to hearing from you and assisting you with all of your real
            estate needs.
          </p>
          <div className="flex flex-col gap-4 m-20">
            <input
              type="text"
              className={styles.inputBox}
              placeholder="Your user name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className={styles.inputBox}
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={`${styles.inputBox} mb-3`}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              className={styles.inputBox}
              name="message"
              rows="1"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onInput={handleResize}
            />
            <button className={styles.submitBtn} id="submit_btn">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full p-6 bg-[#1A1A2E]">
        <div className="flex flex-col w-1/2 gap-4 p-6 ps-10">
          <h4 className={`${styles.contactInfos} ${styles.verticalWhiteBox}`}>
            +216 86.321.123
          </h4>
          <h4 className={`${styles.contactInfos} ${styles.verticalWhiteBox}`}>
            +216 76.121.123
          </h4>
          <h4 className={`${styles.contactInfos} ${styles.verticalWhiteBox}`}>
            Mahmoud's agency
          </h4>
          <h4 className={`${styles.contactInfos} ${styles.verticalWhiteBox}`}>
            Mahmoudsagency@gmail.com
          </h4>
        </div>
        <div className="flex flex-col w-1/2 items-center p-6">
          <img
            src="imgs/map.jpeg"
            alt="Map"
            className="h-[250px] w-[500px] object-cover"
          />
          <div className="text-xl mt-4">
            22 Rue Habib Bourgiba Tunis, Tunisia
          </div>
        </div>
      </div>
    </div>
  );
}
