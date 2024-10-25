import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={`${styles.contact_section} `} id="contact_section">
      <h2 className={`${styles.contact_section_header} ${styles.vertical_yellow_box}`}>
        Contact us
      </h2>
      <div className={`${styles.contact_section_body} flex flex-wrap`}>
        <div className={`${styles.infos} w-full md:w-1/2`}>
          <h4 className={`${styles.contact_infos} ${styles.vertical_white_box}`}>+216 86.321.123</h4>
          <h4 className={`${styles.contact_infos} ${styles.vertical_white_box}`}>+216 76.121.123</h4>
          <h4 className={`${styles.contact_infos} ${styles.vertical_white_box}`}>Mahmoud's agency</h4>
          <h4 className={`${styles.contact_infos} ${styles.vertical_white_box}`}>Mahmoudsagency@gmail.com</h4>
        </div>
        <div className={`w-full md:w-1/2 ${styles.map}`}>
          <img src="imgs/map.jpeg" alt="Map" className={`${styles.map_img}`} />
          <div className={`${styles.map_text}`}>22 Rue Habib Bourgiba Tunis, Tunisia</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
