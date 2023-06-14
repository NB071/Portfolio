import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import PersonalLogoWhite from "@/assets/personalLogo/personalLogoWhite.svg";
import PersonalLogoPrimary from "@/assets/personalLogo/personalLogoPrimary.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  variant: "projectPages" | "landing";
  bg?: string;
  textColor?: string;
};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        className={`flex h-full w-full max-w-[1920px] items-center justify-between gap-5 px-7 font-light tab:hidden ${
          props.variant === "landing"
            ? "text-white-text"
            : `text-${props.textColor}`
        }`}
      >
        <img
          onClick={() => {
            navigate("/");
          }}
          src={
            props.variant === "landing"
              ? PersonalLogoPrimary
              : PersonalLogoWhite
          }
          alt="Personal logo"
          className="cursor-pointer"
        />

        <Bars3Icon
          className={`w-8 ${
            isMobileMenuOpen ? "hidden" : "block"
          } duration-500`}
          onClick={() => setIsMobileMenuOpen(true)}
        />
        <XMarkIcon
          className={`w-8 ${isMobileMenuOpen ? "block" : "hidden"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75, height: "0" },
              visible: { opacity: 1, y: 0, height: "auto" },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className={`flex flex-col items-center gap-5 opacity-100 ${
              props.variant === "landing"
                ? "text-white-text"
                : `text-${props.textColor}`
            }`}
          >
            <Link
              duration={100}
              offset={-130}
              smooth
              spy
              to={props.variant === "landing" ? "portfolio" : "description"}
            >
              <span
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer bg-gradient-to-r ${
                  props.variant === "landing"
                    ? "from-white-text to-white-text"
                    : `from-${props.textColor} to-${props.textColor}`
                } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
              >
                {props.variant === "landing" ? "Portfolio" : "Description"}
              </span>
            </Link>
            <Link
              duration={100}
              offset={-130}
              smooth
              spy
              to={props.variant === "landing" ? "stack" : "demo"}
            >
              <span
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer bg-gradient-to-r ${
                  props.variant === "landing"
                    ? "from-white-text to-white-text"
                    : `from-${props.textColor} to-${props.textColor}`
                } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
              >
                {props.variant === "landing" ? "Stack" : "Demo"}
              </span>
            </Link>
            <Link
              duration={100}
              offset={-130}
              smooth
              spy
              to={props.variant === "landing" ? "about-me" : "features"}
            >
              <span
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer bg-gradient-to-r ${
                  props.variant === "landing"
                    ? "from-white-text to-white-text"
                    : `from-${props.textColor} to-${props.textColor}`
                } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
              >
                {props.variant === "landing" ? "About Me" : "features"}
              </span>
            </Link>
            <Link
              duration={100}
              offset={-130}
              smooth
              spy
              to={props.variant === "landing" ? "contact-me" : "technologies"}
            >
              <span
                onClick={() => setIsMobileMenuOpen(false)}
                className={`cursor-pointer bg-gradient-to-r ${
                  props.variant === "landing"
                    ? "from-white-text to-white-text"
                    : `from-${props.textColor} to-${props.textColor}`
                } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
              >
                {props.variant === "landing" ? "Contact me" : "Technologies"}
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`hidden h-full w-full max-w-[1920px] items-center justify-center gap-10 font-light tab:flex ${
          props.variant === "landing"
            ? "text-white-text"
            : `text-${props.textColor}`
        }`}
      >
        <Link
          duration={100}
          offset={-130}
          smooth
          spy
          to={props.variant === "landing" ? "portfolio" : "description"}
        >
          <span
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Portfolio" : "Description"}
          </span>
        </Link>
        <Link
          duration={100}
          offset={-130}
          smooth
          spy
          to={props.variant === "landing" ? "stack" : "demo"}
        >
          <span
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Stack" : "Demo"}
          </span>
        </Link>
        <img
          onClick={() => {
            navigate("/");
          }}
          src={
            props.variant === "landing"
              ? PersonalLogoPrimary
              : PersonalLogoWhite
          }
          alt="Personal logo"
          className="px-5 cursor-pointer hover:-translate-y-1 hover:px-10 duration-500 hover:drop-shadow-2xl"
        />
        <Link
          duration={100}
          offset={-130}
          smooth
          spy
          to={props.variant === "landing" ? "about-me" : "features"}
        >
          <span
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "About Me" : "features"}
          </span>
        </Link>
        <Link
          duration={100}
          offset={-130}
          smooth
          spy
          to={props.variant === "landing" ? "contact-me" : "technologies"}
        >
          <span
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer bg-gradient-to-r ${
              props.variant === "landing"
                ? "from-white-text to-white-text"
                : `from-${props.textColor} to-${props.textColor}`
            } bg-[length:0%_2px] bg-left-bottom bg-no-repeat no-underline transition-all duration-500 ease-in-out hover:bg-[length:100%_2px]`}
          >
            {props.variant === "landing" ? "Contact me" : "Technologies"}
          </span>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
