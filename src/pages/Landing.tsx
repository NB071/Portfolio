import HeadshotLanding from "@/assets/Headshot-landing.svg";

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

// Hero icons
import {
  CommandLineIcon,
  UserCircleIcon,
  PhoneIcon,
  ArrowSmallDownIcon,
  PaperClipIcon,
  ArrowUpRightIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect } from "react";

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
            <div className=" w-14 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
            <h2 className="mx-4  text-2xl font-bold text-Dark-brown tab:text-4xl">
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
        <section className=" m-auto mt-20 max-w-[1920px] px-4" id="stack">
          <div className="flex items-center">
            <div className=" flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown tab:w-32"></div>
            <h2 className="mx-4  text-2xl font-bold text-Dark-brown tab:text-4xl">
              Stack
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-Light-brown"></div>
          </div>
          <section className=" m-auto mt-20 flex max-w-[1920px] flex-col gap-2 px-4 tab:flex-row des:px-36">
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
