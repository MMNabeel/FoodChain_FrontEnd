import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Food Chain</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Food Chain</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
          <AiFillYoutube />
          <AiFillInstagram />
          <AiFillGithub />
      </aside>
    </footer>
  );
};

export default Footer;
