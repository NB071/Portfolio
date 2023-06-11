import "swiper/css";
import "swiper/css/pagination";

import HeadshotLanding from "@/assets/Headshot-landing.svg";
import HeadshotAboutMe from "@/assets/headhotAboutMe.png";

// Svgs
import shapes from "@/assets/WorksBgShapes.svg";

// Social icon svgs
import LinkedInIcon from "@/assets/socialIcons/Linkedin.svg";
import GitHubIcon from "@/assets/socialIcons/Github.svg";
import TwitterIcon from "@/assets/socialIcons/Twitter.svg";
import MailIcon from "@/assets/socialIcons/Mail.svg";

// Projects Logo svgs
import DigiBookshelfLogo from "@/assets/projectsLogo/DigiBookshelfLogo.svg";
import LyristLogo from "@/assets/projectsLogo/LyristLogo.svg";
import DailyQuotesLogo from "@/assets/projectsLogo/DailyQuotesLogo.svg";

// stack logos [front-end]
import htmlLogo from "@/assets/StackLogos/front/HTML.svg";
import cssLogo from "@/assets/StackLogos/front/CSS.svg";
import scssLogo from "@/assets/StackLogos/front/SCSS.svg";
import tailwindLogo from "@/assets/StackLogos/front/Tailwind.svg";
import muiLogo from "@/assets/StackLogos/front/MUI.svg";
import javascriptLogo from "@/assets/StackLogos/front/JS.svg";
import typescriptLogo from "@/assets/StackLogos/front/TS.svg";
import reactLogo from "@/assets/StackLogos/front/React.svg";
import figmaLogo from "@/assets/StackLogos/front/Figma.svg";
import angularLogo from "@/assets/StackLogos/front/Angular.svg";

// stack logos [back-end]
import nodejsLogo from "@/assets/StackLogos/back/Node js.svg";
import expressjsLogo from "@/assets/StackLogos/back/Express Js.svg";
import mysqlLogo from "@/assets/StackLogos/back/MySQL.svg";
import jwtLogo from "@/assets/StackLogos/back/jwt.svg";
import knexLogo from "@/assets/StackLogos/back/Knex.svg";
import postmanLogo from "@/assets/StackLogos/back/Postman.svg";
import socketioLogo from "@/assets/StackLogos/back/SocketIO.svg";
import djangoLogo from "@/assets/StackLogos/back/Django.svg";

// stack logos [development]
import gitLogo from "@/assets/StackLogos/dev/Git.svg";
import herokuIcon from "@/assets/StackLogos/dev/Heroku.svg";
import jestIcon from "@/assets/StackLogos/dev/Jest.svg";
import backstageioIcon from "@/assets/StackLogos/dev/BackstageIO.svg";
import linuxIcon from "@/assets/StackLogos/dev/Linux.svg";
import pythonIcon from "@/assets/StackLogos/dev/Python.svg";
import dockerIcon from "@/assets/StackLogos/dev/Docker.svg";

// certificates
import SecurityPlusIcon from "@/assets/certificationsLogos/SecurityPlus Logo Certified CE.png";
import IBMCybersecurityFundamentals from "@/assets/certificationsLogos/IBM Cybersecurity Fundamentals.png";
import eJPT from "@/assets/certificationsLogos/eJPT.png";
import AnisaLogo from "@/assets/certificationsLogos/AnisaHouseLogo.jpeg";
import ArjangLogo from "@/assets/certificationsLogos/ArjangLogo.jpeg";
import HubspotLogo from "@/assets/certificationsLogos/HubSpot-Academy-Logo.png";

// Hero icons
import {
  CommandLineIcon,
  UserCircleIcon,
  PhoneIcon,
  ArrowSmallDownIcon,
  PaperClipIcon,
  ArrowUpRightIcon,
  ArrowUpCircleIcon,
  DocumentArrowDownIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect, CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Landing = () => {
  const [showReturnTopBtn, setShowReturnTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowReturnTopBtn(true);
      } else {
        setShowReturnTopBtn(false);
      }
    });
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <main className="relative z-[2] backdrop-blur-[2px]">
        <section id="intro" className="">
          <div className="flex flex-col tab:flex-row-reverse">
            <img
              src={HeadshotLanding}
              className="relative -top-[4.2rem] left-14 z-10 m-auto h-[15rem] tab:left-0 tab:top-0 tab:m-0 tab:ml-auto tab:h-[20rem] des:h-[25rem]"
              alt=""
            />

            <div className="m-auto flex flex-col items-center gap-5 ">
              <div className="flex w-full flex-col justify-between gap-5 tab:flex-row-reverse">
                <div className="flex items-center justify-center gap-3">
                  <Link
                    to="https://www.linkedin.com/in/nima-bargestan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="cursor-pointer transition-all duration-500 hover:scale-125 des:w-8"
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
                      className="cursor-pointer transition-all duration-500 hover:scale-125 des:w-8"
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
                      className="cursor-pointer transition-all duration-500 hover:scale-125 des:w-8"
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
                      className="cursor-pointer transition-all duration-500 hover:scale-125 des:w-8"
                      src={MailIcon}
                      title="Mail - Nima Bargestan"
                      alt="Mail Icon"
                    />
                  </Link>
                </div>
                <h2 className="font-outline-1 text-center text-2xl font-bold text-transparent tab:text-start tab:text-3xl des:text-5xl">
                  Hi there, I'm
                </h2>
              </div>

              <h1 className="w-full text-center text-2xl font-bold text-Dark-brown tab:text-start tab:text-5xl des:text-6xl">
                Nima Bargestan
              </h1>
              <h2 className="font-outline-1 w-full text-center text-2xl font-bold text-transparent tab:text-start tab:text-3xl des:text-5xl">
                Full Stack Developer
              </h2>
            </div>
          </div>

          {/* CTAs */}
          <section className="m-auto max-w-[1920px] ">
            <div className="mt-10 flex w-full flex-col gap-2 px-4 tab:mt-16 des:mt-24 des:flex-row-reverse">
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex w-full flex-col gap-2 tab:flex-row">
                  <article
                    className="h-[8rem] cursor-pointer rounded-round border-none bg-[#D58F6B] duration-500 hover:scale-95 tab:h-[11rem] tab:flex-1  des:h-[12rem]"
                    title="Stack"
                  >
                    <div className="flex h-full items-end justify-between px-9 pb-5 des:px-10 des:py-8">
                      <h3 className=" align-bottom text-lg text-white-text">
                        Stack
                      </h3>
                      <CommandLineIcon className="mb-1 h-5 text-white-text tab:h-6" />
                    </div>
                  </article>
                  <article
                    className="h-[8rem] cursor-pointer rounded-round border-none bg-[#1B1716] duration-500 hover:scale-95  tab:h-[11rem] tab:flex-1  des:h-[12rem]"
                    title="About me"
                  >
                    <div className="flex h-full items-end justify-between px-9 pb-5 des:px-10 des:py-8">
                      <h3 className=" align-bottom text-lg text-white-text">
                        About me
                      </h3>
                      <UserCircleIcon className="mb-1 h-5 text-white-text tab:h-6" />
                    </div>
                  </article>
                </div>
                <article
                  className="h-[8rem] cursor-pointer rounded-round border-none bg-[#3C2A20] duration-500 hover:scale-95  tab:h-[11rem] des:h-[12rem]"
                  title="Contact me"
                >
                  <div className="flex h-full items-end justify-between px-9 pb-5 des:px-10 des:py-8">
                    <h3 className=" align-bottom text-lg text-white-text">
                      Contact me
                    </h3>
                    <PhoneIcon className="mb-1 h-5 text-white-text tab:h-6" />
                  </div>
                </article>
              </div>

              <article
                className="group relative h-[8rem] cursor-pointer overflow-hidden rounded-round border-none bg-[#69533E] duration-500 hover:scale-95 tab:h-[13rem] des:h-[24.5rem] des:flex-1"
                title="Work"
              >
                <div className="relative z-10 flex h-full flex-col justify-between px-9 py-5 des:px-12 des:py-9">
                  <div className="flex items-center justify-between">
                    <h3 className="align-bottom text-base text-white-text des:text-3xl">
                      Work
                    </h3>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-Light-brown tab:h-12 tab:w-12 des:h-14 des:w-14 ">
                      <PaperClipIcon className=" w-7 p-2 text-white-text tab:w-8 des:w-9" />
                    </div>
                  </div>
                  <div className=" animate-marqeeAnimation whitespace-nowrap">
                    <h3 className="hidden font-medium text-white-text duration-300 group-hover:opacity-0 tab:block tab:text-4xl des:text-6xl">
                      Visit and browse through my projects
                    </h3>
                  </div>
                  <div className="flex w-full items-end justify-between">
                    <h3 className=" align-bottom text-lg text-white-text">
                      See my works
                    </h3>
                    <ArrowSmallDownIcon className="h-5 animate-bounce pr-[.35rem] text-white-text tab:h-6 des:h-8" />
                  </div>
                </div>
                <img
                  src={shapes}
                  className="absolute inset-0 z-[1] m-auto h-20 animate-rotate duration-300 group-hover:contrast-200 tab:h-24	des:h-28 "
                  alt="rotating shapes"
                />
              </article>
            </div>
          </section>
        </section>

        {/* work section */}
        <section className="m-auto mt-32 max-w-[1920px] px-4" id="work">
          <div className="flex items-center">
            <div className="w-14 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-Dark-brown tab:text-4xl">
              Work
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown"></div>
          </div>
          <section className="mt-12 flex flex-col gap-2">
            <Link to="/projects/Digibookshelf">
              <article className="group relative flex h-[17.125rem] w-full cursor-pointer flex-col justify-between rounded-round bg-[#6936F5] p-10 duration-500 hover:scale-95 tab:h-[24rem]">
                <div className="flex w-full justify-between font-medium text-white">
                  <p>01.</p>
                  <p>Featured</p>
                </div>
                <div className="flex w-full justify-between font-medium text-white">
                  <p>Capstone Project</p>
                  <ArrowUpRightIcon className="h-5 w-5 group-hover:animate-bounce" />
                </div>
                <img
                  src={DigiBookshelfLogo}
                  className="absolute inset-0 m-auto duration-500 group-hover:scale-125 tab:scale-150"
                  alt="Digi Bookshelf logo"
                />
              </article>
            </Link>
            <div className="flex flex-col gap-2 tab:flex-row">
              <Link to="/projects/Lyrist" className="w-full">
                <article className="group relative flex h-[17.125rem] w-full cursor-pointer flex-col justify-between rounded-round bg-[#5BAE95] p-10 duration-500 hover:scale-95">
                  <div className="flex w-full justify-between font-medium text-[#186E54]">
                    <p>02.</p>
                    <p>Showcase</p>
                  </div>
                  <div className="flex w-full justify-between font-medium text-[#186E54]">
                    <p>Project in Progress</p>
                    <ArrowUpRightIcon className="h-5 w-5 group-hover:animate-bounce" />
                  </div>
                  <img
                    src={LyristLogo}
                    className="absolute inset-0 m-auto duration-500 group-hover:scale-125 tab:scale-150"
                    alt="Digi Bookshelf logo"
                  />
                </article>
              </Link>
              <Link to="/projects/DailyQuotes" className="w-full">
                <article className="group relative flex h-[17.125rem] w-full cursor-pointer flex-col justify-between rounded-round bg-[#FF59EE] p-10 duration-500 hover:scale-95">
                  <div className="flex w-full justify-between font-medium text-[#99258D]">
                    <p>03.</p>
                    <p>Showcase</p>
                  </div>
                  <div className="flex w-full justify-between font-medium text-[#99258D]">
                    <p>Project in Queue</p>
                    <ArrowUpRightIcon className="h-5 w-5 group-hover:animate-bounce" />
                  </div>
                  <img
                    src={DailyQuotesLogo}
                    className="absolute inset-0 m-auto duration-500 group-hover:scale-125 tab:scale-150"
                    alt="Digi Bookshelf logo"
                  />
                </article>
              </Link>
            </div>
          </section>
        </section>

        {/* stack section */}
        <section className="m-auto mt-20 max-w-[1920px] px-4" id="stack">
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
            <h2 className="mx-4  text-2xl font-bold text-Dark-brown tab:text-4xl">
              Stack
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown"></div>
          </div>
          <section className=" m-auto mt-20 flex max-w-[1920px] flex-col gap-2 px-4 tab:flex-row des:px-28">
            <article className="flex h-[24rem] w-full flex-col gap-10 rounded-round bg-Light-brown p-10 duration-500 hover:drop-shadow-2xl lgmob:h-[28rem] tab:order-2 tab:h-[35rem] tab:w-[30%] tab:gap-20 des:tab:h-[40rem]">
              <h3 className="text-center font-bold text-white-text lgmob:text-xl des:text-2xl">
                Front-end
              </h3>
              <div className="flex h-full flex-col justify-center gap-5 tab:gap-10 des:gap-12">
                {/* first row */}
                <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                  <Link
                    to="https://html.spec.whatwg.org/multipage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={htmlLogo}
                      className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                      alt="HTML5 logo"
                      title="HTML5"
                    />
                  </Link>
                  <Link
                    to="https://www.w3.org/Style/CSS/Overview.en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={cssLogo}
                      className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                      alt="CSS logo"
                      title="CSS"
                    />
                  </Link>
                  <Link
                    to="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={figmaLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="Figma logo"
                      title="Figma"
                    />
                  </Link>
                </div>

                {/* second row */}
                <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                  <Link
                    to="https://www.javascript.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={javascriptLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="JavaScript logo"
                      title="JavaScript"
                    />
                  </Link>
                  <Link
                    to="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={typescriptLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="TypeScript logo"
                      title="TypeScript"
                    />
                  </Link>
                  <Link
                    to="https://www.react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={reactLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="React logo"
                      title="React"
                    />
                  </Link>
                </div>
                {/* third row */}
                <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                  <Link
                    to="https://www.sass-lang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={scssLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="SASS logo"
                      title="SASS"
                    />
                  </Link>
                  <Link
                    to="https://www.tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={tailwindLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="TailWind logo"
                      title="Tailwind"
                    />
                  </Link>
                  <Link
                    to="https://www.mui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={muiLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="MUI Logo"
                      title="MUI"
                    />
                  </Link>
                </div>
                <div className="mt-auto flex flex-col items-center gap-3">
                  <h4 className="text-center text-sm font-light text-white-text lgmob:text-base">
                    Experimenting...
                  </h4>
                  <Link
                    to="https://www.angular.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={angularLogo}
                      className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                      alt="Angular logo"
                      title="Angular"
                    />
                  </Link>
                </div>
              </div>
            </article>
            <div className="relative tab:flex-1 tab:perspective-1600">
              <article className="flex h-[24rem] w-full flex-col gap-10 rounded-round bg-Light-brown p-10 duration-500 hover:drop-shadow-2xl hover:rotate-y-0 lgmob:h-[28rem] tab:h-[35rem] tab:gap-20 tab:rotate-y-30 tab:transform des:tab:h-[40rem]">
                <h3 className="text-center font-bold text-white-text lgmob:text-xl des:text-2xl">
                  Back-end
                </h3>
                <div className="flex h-full flex-col justify-center gap-5 tab:gap-10">
                  {/* first row */}
                  <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                    <Link
                      to="https://www.nodejs.org/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={nodejsLogo}
                        className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                        alt="Node.js logo"
                        title="Node.js"
                      />
                    </Link>
                    <Link
                      to="https://www.expressjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={expressjsLogo}
                        className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                        alt="Express.js logo"
                        title="Express.js"
                      />
                    </Link>
                    <Link
                      to="https://www.mysql.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={mysqlLogo}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="MySQL Logo"
                        title="MySQL"
                      />
                    </Link>
                  </div>
                  {/* second row */}
                  <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                    <Link
                      to="https://jwt.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={jwtLogo}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-14 des:w-14"
                        alt="JWT Logo"
                        title="JWT"
                      />
                    </Link>
                    <Link
                      to="https://www.knexjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={knexLogo}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Knex logo"
                        title="Knex"
                      />
                    </Link>
                    <Link
                      to="https://www.postman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={postmanLogo}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Postman logo"
                        title="Postman"
                      />
                    </Link>
                  </div>
                  {/* third row */}
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to="https://socket.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={socketioLogo}
                        className="h-7 w-20 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 tab:h-8 des:h-12"
                        alt="SocketIO logo"
                        title="SocketIO"
                      />
                    </Link>
                  </div>
                  <div className="mt-auto flex flex-col items-center gap-3">
                    <h4 className="text-center text-sm font-light text-white-text lgmob:text-base">
                      Experimenting...
                    </h4>
                    <Link
                      to="https://www.djangoproject.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={djangoLogo}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Django logo"
                        title="Django"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="tab:order-3 tab:flex-1 tab:perspective-1600">
              <article className="flex h-[24rem] w-full flex-col gap-10 rounded-round bg-Light-brown p-10 duration-500 hover:drop-shadow-2xl hover:rotate-y-0 lgmob:h-[28rem] tab:h-[35rem] tab:gap-20 tab:-rotate-y-30 tab:transform des:tab:h-[40rem]">
                <h3 className="text-center font-bold text-white-text lgmob:text-xl des:text-2xl">
                  Development
                </h3>
                <div className="flex h-full flex-col justify-center gap-5 tab:gap-10">
                  {/* first row */}
                  <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                    <Link
                      to="https://www.heroku.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={herokuIcon}
                        className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                        alt="Heroku logo"
                        title="Heroku"
                      />
                    </Link>
                    <Link
                      to="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={gitLogo}
                        className="h-8 w-8 cursor-pointer duration-300 hover:scale-90 lgmob:h-12 lgmob:w-12 tab:h-9 tab:w-9 des:h-14 des:w-14"
                        alt="Git logo"
                        title="Git"
                      />
                    </Link>
                    <Link
                      to="https://jestjs.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={jestIcon}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Jest logo"
                        title="Jest"
                      />
                    </Link>
                    <Link
                      to="https://backstage.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={backstageioIcon}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Backstage logo"
                        title="Backstage"
                      />
                    </Link>
                  </div>
                  {/* second row */}
                  <div className="flex items-center justify-center gap-3 lgmob:gap-8 tab:gap-5 des:gap-8">
                    <Link
                      to="https://www.linux.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linuxIcon}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Linux logo"
                        title="Linux"
                      />
                    </Link>
                    <Link
                      to="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={pythonIcon}
                        className="h-7 w-7 cursor-pointer duration-300 hover:scale-90 lgmob:h-11 lgmob:w-11 tab:h-8 tab:w-8 des:h-12 des:w-12"
                        alt="Python logo"
                        title="Python"
                      />
                    </Link>
                  </div>

                  <div className="mt-auto flex flex-col items-center gap-3">
                    <h4 className="text-center text-sm font-light text-white-text lgmob:text-base">
                      Experimenting...
                    </h4>
                    <Link
                      to="https://www.docker.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={dockerIcon}
                        className="h-12 w-20 cursor-pointer duration-300 hover:scale-90 lgmob:h-14 tab:h-8 des:h-14 "
                        alt="Docker logo"
                        title="Docker"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>

        {/* about */}
        <section className="m-auto mt-20 max-w-[1920px] px-4" id="about-me">
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-Dark-brown tab:text-4xl">
              About me
            </h2>
            <div className="w-16 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
          </div>
          <section className="mt-20 px-4 tab:px-24">
            <div className="flex flex-col items-center gap-20 des:flex-row">
              <div className="flex flex-col gap-5 ">
                <img
                  src={HeadshotAboutMe}
                  className="duration-500 hover:contrast-75"
                  alt="my photo"
                />
                <button
                  type="button"
                  className="my-4 flex items-center justify-center gap-2 rounded-round bg-Dark-brown px-10 py-3 text-white-text duration-500 hover:border hover:border-Dark-brown hover:bg-transparent hover:text-Dark-brown"
                  onClick={() => (window.location.href = "#intro")}
                >
                  <DocumentArrowDownIcon className="w-7" />
                  Download Resume
                </button>
              </div>
              <div className="flex-1 indent-12 font-medium leading-8 text-Dark-brown">
                <p>
                  I am a passionate full-stack JavaScript developer with a
                  strong background in computer science and security. Since my
                  early days in 5th grade, web development has been my true
                  love, when I learned HTML and CSS. Although I officially
                  started my web development journey about a year ago, external
                  factors, including immigration to Canada, briefly interrupted
                  my progress. However, my dedication to the craft led me to
                  enroll in the highly regarded BrainStation Software
                  Engineering Bootcamp three months ago, reigniting my passion
                  and propelling me to acquire comprehensive skills as a
                  full-stack developer.
                </p>
                <br />
                <p>
                  I have developed a strong skillset that will undoubtedly be
                  valuable in my web development career. As part of my diploma
                  program, I gained an in-depth understanding of computation and
                  programming. Simultaneously, I’d been immensely interested in
                  cybersecurity. Thus, I participated in individual courses to
                  learn Linux, networking, etc., to broaden my knowledge. With
                  my in-depth perception of cybersecurity, I could instantly
                  notice potential flaws in the development process.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-20 flex flex-col items-center justify-center gap-8 px-4 des:flex-row des:gap-16 des:px-36">
            <h3 className="text-3xl font-bold text-Dark-brown">
              My Certifications:
            </h3>
            <div className="h-[24rem] w-full rounded-round bg-Light-brown tab:h-80 des:w-[37rem]">
              <Swiper
                style={
                  {
                    "--swiper-pagination-color": "#fff",
                  } as CSSProperties
                }
                direction={"vertical"}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                className="cert-slider cursor-grab active:cursor-grabbing"
                modules={[Pagination]}
              >
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={SecurityPlusIcon}
                      className="h-48 w-36 rounded-round bg-white p-5 contrast-[.8] tab:h-full tab:w-52"
                      alt="Security+ logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="text-lg font-medium">
                        Title: <span className="underline">Security+</span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://www.credly.com/earner/earned/badge/21b63add-6fb6-4845-9077-f57b97085f36",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2022</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={IBMCybersecurityFundamentals}
                      className="h-48 w-36 rounded-round bg-white contrast-[.8] tab:h-full tab:w-52"
                      alt="IBM Cybersecurity Fundamentals logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium">
                        Title:{" "}
                        <span className="underline">
                          Cybersecurity Fundamentals - IBM
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://www.credly.com/badges/d91d7c20-aa28-4271-84b6-feeef47915b8",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2023</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={eJPT}
                      className="h-48 w-36 rounded-round bg-white contrast-[.8] tab:h-full tab:w-52"
                      alt="eJPT logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium">
                        Title:{" "}
                        <span className="underline">
                          eJPT - eLearn Security Junior Penetration Tester
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://verified.elearnsecurity.com/certificates/a6ce5477-0220-4b34-83e6-870e65da4686",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={ArjangLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Arjang logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          CEH - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1HcgTc6xShKkpbZujw-4xNOWIJJ5Pa_V6/view?usp=drivesdk",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={ArjangLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Arjang logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          SANS PenTest Pack L1 - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1XWtNwHLBOzytbS9o0TaDLRYpUivZoLQ6/view?usp=drivesdk",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={HubspotLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Hubspot logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          HubSpot Academy - Digital Marketing
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://app.hubspot.com/academy/achievements/2zp710wl/en/1/nima-bargestan/digital-marketing",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2023</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={AnisaLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Anisa logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium">
                        Title:{" "}
                        <span className="underline">
                          CompTIA Network+ - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/12gForSZ2AZFgADb-BO5SkkdcOqsEQxOK/view?usp=sharing",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={ArjangLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Arjang logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium">
                        Title:{" "}
                        <span className="underline">
                          CCNA - Bootcamp Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1RjEqnJ4IAo-61zesspswOKcD0T13vdUs/view?usp=drivesdk",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2021</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={AnisaLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Anisa logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          LPIC-1 - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1ELQy6zUyYivzC2QcWUh8487cZC8ZAPcy/view?usp=sharing",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={AnisaLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Anisa logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          LPIC-2 - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1RiyGcxg7EJ3xZ8czmswEMFVw25S8cBKZ/view?usp=sharing",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="p-9">
                  <div className="relative flex h-full flex-col items-center justify-center gap-8 tab:flex-row">
                    <img
                      src={AnisaLogo}
                      className="h-48 w-36 rounded-round  contrast-[.8] tab:h-full tab:w-52"
                      alt="Anisa logo"
                    />
                    <div className="flex flex-col items-center gap-5 text-white-text">
                      <h3 className="w-48 text-center text-lg font-medium tab:w-56">
                        Title:{" "}
                        <span className="underline">
                          Python Programming - Training Course [IRN]
                        </span>
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1a6CPf8ymXWb_PpagtzwkqDh4sgp1KCxB/view?usp=sharing",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-center gap-3 rounded-round border border-white-text px-9 py-3 transition-all duration-500 hover:border-Dark-brown hover:bg-Dark-brown"
                      >
                        <EyeIcon className="w-5" />
                        View Certification
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 flex items-center justify-center rounded-round bg-white-text px-4 py-3 font-medium text-Light-brown">
                    <p className="text-xs">Achieved: 2020</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </section>
      </main>
      <Particles
        className="absolute z-[0]"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#8C7A69",
            },
            links: {
              color: "#69533E",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 90,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
      <div
        className={`fixed h-44 w-44 bg-white ${
          showReturnTopBtn ? "opacity-100" : "opacity-0"
        } -bottom-14 -right-12 z-[3] rounded-full shadow-2xl duration-300`}
      >
        <ArrowUpCircleIcon
          className={`fixed ${
            showReturnTopBtn ? "animate-bounce opacity-100" : "opacity-0"
          } bottom-8 right-8 z-[4] w-10 cursor-pointer text-Light-brown delay-100 duration-300`}
          onClick={goToTop}
        />
      </div>
    </>
  );
};

export default Landing;
