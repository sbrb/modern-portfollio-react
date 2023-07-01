import React from "react";
import "./Footer.css";
import Icon from "../Home/Icon";

function Footer() {
  return (
    <footer>
      <p className="footer_title ft_hover">SHAYAN BISWAS</p>
      {/* <p className="ft_hover">info.sbriju@gmail.com</p>
      <br />
      <p className="ft_hover">+91 9733999325</p>
      <br />
      <br /> */}
      <div className="footerSocial">
        {Icon &&
          Icon.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>
      <p className="copy_right ft_hover">&#169; copyright all right reserved by Tez Programmer for all time.</p>
    </footer>
  );
};

export default Footer;
