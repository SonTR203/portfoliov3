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
      <a
        aria-label="Go back to beginning"
        href="#hero"
        className="text-white
        opacity-0
        pointer-events-none
        focus:opacity-100
        focus:pointer-events-auto
            fixed right-0 bottom-20 bg-red-600 p-3 text-xl rounded
            ">
        To Top
      </a>
    </div>
  );
};

export default Footer;
