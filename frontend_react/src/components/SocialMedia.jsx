import React from "react";

import { BsLinkedin, BsEnvelope } from "react-icons/bs";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="www.linkedin.com/in/jay-mandaliya-054317210"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
     
      <div>
  <a
    href="mailto:jaymandaliya1212@gmail.com"
    className="app__flex"
  >
    <BsEnvelope />
  </a>
</div>
    </div>
  );
};

export default SocialMedia;
