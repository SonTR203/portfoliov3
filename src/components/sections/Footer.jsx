import React from "react";
import MailIcon from "../utils/MailIcon";

const Footer = () => {
  return (
    <div
      className="py-12 w-full flex flex-row space-between"
      tabIndex={0}
      aria-label="Footer">
      <a
        href="mailto: son.nhat2k3@gmail.com"
        className="text-white flex flex-row gap-2 underline"
        tabIndex={0}
        aria-label="My email address is son.nhat2k3@gmail.com. Press enter to send me an email">
        <span>
          <MailIcon />
        </span>
        son.nhat2k3@gmail.com
      </a>
      <p
        className="text-white ml-auto w-fit"
        tabIndex={0}
        aria-label="Made by Son Tran in 2023">
        &copy;Son Tran 2023
      </p>
    </div>
  );
};

export default Footer;
