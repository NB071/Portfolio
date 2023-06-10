import HeadshotLanding from "@/assets/Headshot-landing.svg";

// Blur Circle svgs
// import BlurCircleLightBrown from "@/assets/bgBlurCircles/bgBlurCircleLightBrown.svg";
// import BlurCircleDarkBrown from "@/assets/bgBlurCircles/bgBlurCircleDarkBrown.svg";
// import BlurCircleDarkGray from "@/assets/bgBlurCircles/bgBlurCircleDarkGray.svg";

// svgs
import shapes from "@/assets/WorksBgShapes.svg";

// Social icon svgs
import LinkedInIcon from "@/assets/socialIcons/Linkedin.svg";
import GitHubIcon from "@/assets/socialIcons/Github.svg";
import TwitterIcon from "@/assets/socialIcons/Twitter.svg";
import MailIcon from "@/assets/socialIcons/Mail.svg";

//hero icons
import {
  CommandLineIcon,
  UserCircleIcon,
  PhoneIcon,
  ArrowSmallDownIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

// type Props = {}

const Landing = () => {
  return (
    // Landing page
    <>
      <section>
        <div className="flex flex-col">
          <img
            src={HeadshotLanding}
            className="relative -top-[4.2rem] left-14 z-10 m-auto h-[15rem] tab:left-0 tab:top-0 tab:m-0 tab:ml-auto tab:h-[20rem] des:h-[25rem]"
            alt=""
          />

          <div className="flex flex-col items-center gap-5 tab:flex-row tab:justify-center tab:gap-7 tab:p-20">
            <div className="flex gap-3">
              <Link
                to="https://www.linkedin.com/in/nima-bargestan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer transition-all  duration-500 hover:scale-125"
                  src={LinkedInIcon}
                  title="LinkedIn - Nima Bargestan"
                  alt="LinkedIn Icon"
                />
              </Link>
              <Link
                to="https://github.com/NB071"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer transition-all duration-500 hover:scale-125"
                  src={GitHubIcon}
                  title="Github - Nima Bargestan"
                  alt="Github Icon"
                />
              </Link>
              <Link
                to="https://twitter.com/nimdev071"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer transition-all duration-500 hover:scale-125"
                  src={TwitterIcon}
                  title="Twitter - Nima Bargestan"
                  alt="Twitter Icon"
                />
              </Link>

              <Link
                to="mailto:nimam700@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer transition-all duration-500 hover:scale-125"
                  src={MailIcon}
                  title="Mail - Nima Bargestan"
                  alt="Mail Icon"
                />
              </Link>
            </div>
          </div>
          <h2 className="font-outline-1 text-2xl font-bold text-transparent">
            Hi there, I'm
          </h2>
          <h1 className="text-2xl font-bold text-Dark-brown">Nima Bargestan</h1>
          <h2 className="font-outline-1 text-2xl font-bold text-transparent">
            Full Stack Developer
          </h2>
        </div>

        {/* CTAs */}
        <div>
          <div className="mt-10 flex flex-col gap-2 px-4 ">
            <article
              className="h-[8rem] cursor-pointer rounded-round border-none bg-[#D58F6B] duration-500 hover:scale-95"
              title="Stack"
            >
              <div className="flex h-full items-end justify-between px-9 pb-5">
                <h3 className=" align-bottom text-lg text-white-text">Stack</h3>
                <CommandLineIcon className="mb-1 h-5 text-white-text" />
              </div>
            </article>
            <article
              className="h-[8rem] cursor-pointer rounded-round border-none bg-[#1B1716] duration-500 hover:scale-95"
              title="About me"
            >
              <div className="flex h-full items-end justify-between px-9 pb-5">
                <h3 className=" align-bottom text-lg text-white-text">
                  About me
                </h3>
                <UserCircleIcon className="mb-1 h-5 text-white-text" />
              </div>
            </article>
            <article
              className="h-[8rem] cursor-pointer rounded-round border-none bg-[#3C2A20] duration-500 hover:scale-95"
              title="About me"
            >
              <div className="flex h-full items-end justify-between px-9 pb-5">
                <h3 className=" align-bottom text-lg text-white-text">
                  Contact me
                </h3>
                <PhoneIcon className="mb-1 h-5 text-white-text" />
              </div>
            </article>
            <article
              className="relative h-[8rem] cursor-pointer rounded-round border-none bg-[#69533E] duration-500 hover:scale-95"
              title="About me"
            >
              <div className="relative z-10 flex h-full flex-col justify-between px-9 py-5">
                <div className="flex w-full items-start justify-between">
                  <h3 className=" align-bottom text-base text-white-text">
                    Work
                  </h3>
                  <div className="flex h-9 w-8 items-center justify-center rounded-full bg-Light-brown	">
                    <PaperClipIcon className=" w-7 p-2 text-white-text" />
                  </div>
                </div>
                <div className="flex w-full items-end justify-between">
                  <h3 className=" align-bottom text-lg text-white-text">
                    See my works
                  </h3>
                  <ArrowSmallDownIcon className="h-5 animate-bounce pr-[.35rem] text-white-text" />
                </div>
              </div>
              <img
                src={shapes}
                className="absolute inset-0 z-[1] m-auto h-24 animate-rotate"
                alt="rotating shapes"
              />
            </article>
          </div>
        </div>
        {/* bg circles */}
      </section>
    </>
  );
};

export default Landing;
