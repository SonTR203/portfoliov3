import React from "react";
import MailIcon from "../utils/MailIcon";

const Footer = () => {
  return (
    <div className="py-12 w-full flex flex-row space-between">
      <a
        href="mailto: son.nhat2k3@gmail.com"
        className="text-white flex flex-row gap-2 underline">
        <span>
          <MailIcon />
        </span>
        son.nhat2k3@gmail.com
      </a>
      <p className="text-white ml-auto w-fit">&copy;Son Tran 2023</p>
    </div>
  );
};

export default Footer;
