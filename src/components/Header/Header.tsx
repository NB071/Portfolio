import { Link } from "react-router-dom";
import { useState } from "react";

import PersonalLogoWhite from "@/assets/personalLogo/personalLogoWhite.svg";
import PersonalLogoPrimary from "@/assets/personalLogo/personalLogoPrimary.svg";
import { motion } from "framer-motion";

type Props = {
  variant: "projectPages" | "landing";
  bg?: string;
  textColor?: string;
};

const Header = (props: Props) => {
  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2, delay: 0.2 }}
      className={`fixed top-0 z-[3] w-full ${
        props.variant === "landing" ? `bg-[#69533ec8]` : `bg-[${props.bg}]`
      } py-8 drop-shadow-2xl backdrop-blur-sm`}
    >
      <div
        className={`flex h-full w-full max-w-[1920px] flex-col items-center justify-center gap-5 font-light ${
          props.variant === "landing"
            ? "text-white-text"
            : `text-${props.textColor}`
        } tab:flex-row tab:gap-10 tab:text-base`}
      >
        <Link
          to={props.variant === "landing" ? "#portfolio" : "#description"}
          className="group order-2 no-underline transition-all duration-500 ease-in-out tab:order-1"
        >
          <span
            className={`bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            } bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Portfolio" : "Description"}
          </span>
        </Link>
        <Link
          to={props.variant === "landing" ? "#stack" : "#demo"}
          className="group order-3 no-underline transition-all duration-500 ease-in-out tab:order-2"
        >
          <span
            className={`bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            }  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Stack" : "Demo"}
          </span>
        </Link>
        <Link to="/" className="order-1 px-5 tab:order-3">
          <img
            src={
              props.variant === "landing"
                ? PersonalLogoPrimary
                : PersonalLogoWhite
            }
            alt="Personal logo"
          />
        </Link>
        <Link
          to={props.variant === "landing" ? "#about-me" : "#features"}
          className="group order-3 no-underline transition-all duration-500 ease-in-out tab:order-4"
        >
          <span
            className={`bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            }  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "About me" : "Features"}
          </span>
        </Link>
        <Link
          to={props.variant === "landing" ? "#contact-me" : "#technologies"}
          className="group order-4 no-underline transition-all duration-500 ease-in-out tab:order-4"
        >
          <span
            className={`bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            }  bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Contact me" : "Technologies"}
          </span>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
