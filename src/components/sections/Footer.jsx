import React from "react";
import MailIcon from "../utils/MailIcon";

const Footer = () => {
  return (
    <div className="py-12 w-full flex flex-row space-between">
      <p className="text-white flex flex-row gap-2">
        <span>
          <MailIcon />
        </span>
        son.nhat2k3@gmail.com
      </p>
      <p className="text-white ml-auto w-fit">@Son Tran 2023</p>
    </div>
  );
};

export default Footer;
