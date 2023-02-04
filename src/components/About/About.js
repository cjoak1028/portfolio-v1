import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`flex flex-d-c padding-x`}>
      <div>
        <h2>01/ ABOUT</h2>
      </div>
      <div>
        <h3>PASSIONATE FRONT-END DEVELOPER BASED IN TORONTO</h3>
        <p>
          I DISCOVERED MY LOVE FOR WEB DEVELOPMENT IN 2017 DURING AN INTERNSHIP
          AS A FULL-STACK WEB DEVELOPER AT A START-UP. TO THIS DAY, I CONTINUE
          TO EXPLORE VARIOUS TOOLS AND TECHNIQUES WITH THE GOAL OF DELIVERING
          THE FINEST WEB EXPERIENCES.
        </p>
        <p>
          I AM CREATIVE AND GIVE A CONSIDERABLE AMOUNT OF ATTENTION TO DETAIL.
          ALONG WITH THE SKILLS I’VE HONED OVER THE YEARS, THIS ALLOWS ME TO
          CRAFT WEBSITES THAT ARE BOTH FUNCTIONAL AND VISUALLY APPEALING WITH
          PROFICIENCY.
        </p>
      </div>
    </div>
  );
};

export default About;
