// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// Logo svg
import DigiBookshelfLogo from "@/assets/projectsLogo/DigiBookshelfLogo.svg";
import DigiBookshelfBG from "@/assets/projectsLogo/DigiBookshelfLogoBG.png";
// Screenshots
import DigiBookshelfDashboard from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-dashboard.png";
import DigiBookshelfManage from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-manage.png";
import DigiBookshelfMyShelf from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-shelf.png";
import DigiBookshelfUserProfile from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-userprofile.png";
import DigiBookshelfSignleBook from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-SingleBook.png";
import DigiBookshelfUserModal from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-UserModal.png";

import {
  htmlLogo,
  cssLogo,
  scssLogo,
  herokuIcon,
  knexLogo,
  reactLogo,
  javascriptLogo,
  figmaLogo,
  nodejsLogo,
  expressjsLogo,
  mysqlLogo,
  jwtLogo,
  socketioLogo,
  gitLogo,
} from "@/utils/ImportStacksLogo";

// Components
import Header from "@/components/Header/Header";

import { Reveal } from "@/utils/Reveal";

// icons
import { GithubIcon } from "@/utils/ImportSocialLogos";
import {
  RocketLaunchIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const ProjectDigiBookShelf = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  document.body.style.backgroundColor = "#F1F2F9";

  return (
    <>
      <Header variant="projectPages" bg="#6936f5e8" />

      <main className="relative z-[1] backdrop-blur-[3px]">
        <section
          id="intro"
          className="mx-4 mt-36 max-w-[1920px] duration-500 hover:scale-95 des:mx-auto"
        >
          <Reveal>
            <div className="flex justify-center">
              <div className="flex h-[20rem] w-full flex-col items-center justify-center gap-8 rounded-round bg-DigiBookshelfPrimary p-16 tab:w-[40rem]">
                <img
                  src={DigiBookshelfLogo}
                  alt="Digi bookshelf logo"
                  className="tab:scale-150"
                />
                <div className="flex h-full w-full justify-center gap-5 tab:gap-10 ">
                  <div className="flex items-center gap-4 text-white">
                    <h3 className="text-xs tab:text-base">Demo: </h3>
                    <span className="w-7 cursor-pointer">
                      <Link
                        to="https://digi-bookshelf.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RocketLaunchIcon className="animate-bounce text-white" />
                      </Link>
                    </span>
                  </div>
                  <div className="border-r opacity-50"></div>
                  <div className=" flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-4 text-white">
                      <h3 className="text-xs tab:text-base">Front end: </h3>
                      <Link
                        to="https://github.com/NB071/DigiBookShelf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <GithubIcon className="cursor-pointer fill-white transition-all duration-500 hover:scale-90 des:w-8" />
                      </Link>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                      <h3 className="text-xs tab:text-base">Back end: </h3>
                      <Link
                        to="https://github.com/NB071/DigiBookShelf_API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <GithubIcon className="cursor-pointer fill-white transition-all duration-500 hover:scale-90 des:w-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Description */}
        <section
          id="description"
          className="mx-4 mt-20 max-w-[1920px] px-4 tab:mx-10 des:mx-auto"
        >
          <div className="flex items-center">
            <div className="w-14 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
              Description
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary"></div>
          </div>
          <Reveal>
            <section className="m-auto mt-20 des:px-28">
              <img
                src={DigiBookshelfBG}
                alt="Digi Bookshelf logo"
                className="relative z-[4] mx-auto mb-6 w-64 drop-shadow-2xl tab:w-96 des:w-auto"
              />
              <div className="relative -top-16 z-[3] rounded-round bg-[#6535e8] px-10 py-20">
                <p className="indent-12 font-medium leading-8 text-white">
                  This website is a platform for managing and tracking your
                  books. It allows users to easily record the books they are
                  reading and make daily entries or drop a book if they decide
                  to stop reading it. The goal is to increase productivity for
                  readers particularly in their careers. The platform also aims
                  to simplify the process of tracking books as existing options
                  can be overwhelming. Users can sign up store and track their
                  books discover new titles and potentially read along with
                  friends. The design focuses on simplicity and ease of use. It
                  provides a centralized solution for storing and managing books
                  digitally. Additionally users can set goals for the number of
                  books they want to read. The platform offers high availability
                  across devices and ensures that users can remember the books
                  they have read over time.
                </p>
              </div>
            </section>
          </Reveal>
        </section>

        {/* Demo */}
        <section
          id="demo"
          className="mx-4 mt-20 max-w-[1920px] px-4 tab:mx-10 des:mx-auto"
        >
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
            <h2 className="mx-4  text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
              Demo
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary"></div>
          </div>
          <Reveal>
            <section className="m-auto mt-20 px-4 des:px-28">
              <div className="relative z-[4] m-auto w-fit rounded-round bg-DigiBookshelfPrimary px-10 py-10 drop-shadow-2xl">
                <RocketLaunchIcon className="m-auto w-9 text-white" />
              </div>
              <div className="relative -top-9 z-[3] rounded-round bg-[#6535e8] px-10 py-20 text-center">
                <span className="block text-sm font-bold text-white tab:text-lg">
                  URL <br />
                  <Link
                    to="https://digi-bookshelf.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-normal underline"
                  >
                    www.digi-bookshelf.herokuapp.com
                  </Link>
                </span>
                <div className="mt-10 flex items-center justify-center">
                  <div className="tab:mx m-auto  w-1/2 flex-1 rounded-round border-t-2 opacity-50"></div>
                  <h3 className="flex-1 text-[.6rem] font-bold text-white tab:text-sm des:text-base">
                    Sample credenial
                  </h3>
                  <div className="tab:mx  m-auto my-10 w-1/2 flex-1 rounded-round border-t-2 opacity-50"></div>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-sm text-white tab:text-lg">
                    <span className="mb-1 block  font-bold">Email:</span>
                    demo@gmail.com
                  </p>
                  <p className="text-sm text-white tab:text-lg">
                    <span className="mb-1 block  font-bold">Password:</span>
                    password
                  </p>
                </div>
              </div>
            </section>
          </Reveal>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-4 mt-20 max-w-[1920px] px-4 tab:mx-10 des:mx-auto"
        >
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
              Features
            </h2>
            <div className="w-16 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
          </div>
          <Reveal>
            <section className="m-auto mt-20 px-4 des:px-28">
              <div className="relative z-[4] m-auto w-fit rounded-round bg-DigiBookshelfPrimary px-10 py-10 drop-shadow-2xl">
                <InformationCircleIcon className="m-auto w-9 text-white" />
              </div>
              <div className="relative -top-9 z-[3] rounded-round bg-[#6535e8] px-16 py-20 text-center tab:px-44">
                <ul className="list-disc text-left text-white">
                  <li className="py-4">
                    Central platform to store and manage books being read or
                    read previously.
                  </li>
                  <li className="py-4">
                    Trending books from NYT to help users discover popular
                    books.
                  </li>
                  <li className="py-4">
                    Goal-setting feature to motivate users to read a certain
                    number of books.
                  </li>
                  <li className="py-4">
                    Ability to see what books and progress friends have made to
                    facilitate discussions and recommendations.
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>
        </section>

        {/* Screenshots */}
        <section
          id="screenshots"
          className="mt-20 max-w-[1920px] px-4 tab:mx-10 des:mx-auto"
        >
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
              Screenshots
            </h2>
            <div className="w-16 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
          </div>
          <Reveal>
            <section className="m-auto mt-20 px-4 des:px-28">
              <div className="flex flex-wrap justify-center gap-2">
                <img
                  src={DigiBookshelfDashboard}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `dashboard` screenshot"
                />
                <img
                  src={DigiBookshelfManage}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `Manage` screenshot"
                />
                <img
                  src={DigiBookshelfMyShelf}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `My Shelf` screenshot"
                />
                <img
                  src={DigiBookshelfSignleBook}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `Book Information` screenshot"
                />
                <img
                  src={DigiBookshelfUserModal}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `User Modal` screenshot"
                />
                <img
                  src={DigiBookshelfUserProfile}
                  className="w-[45rem] rounded-round duration-500 hover:drop-shadow-2xl "
                  alt="Digi Bookshelf `User Profile` screenshot"
                />
              </div>
            </section>
          </Reveal>
        </section>

        {/* Technologies */}
        <section
          id="technologies"
          className="mt-20 max-w-[1920px] px-4 tab:mx-10 des:mx-auto"
        >
          <div className="flex items-center">
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
              Technologies
            </h2>
            <div className="w-16 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
          </div>
          <Reveal>
            <section className=" m-auto mt-20 flex min-h-fit flex-col gap-2 px-4 tab:flex-row des:px-28">
              <article className="flex h-[24rem] w-full flex-col gap-10 rounded-round bg-DigiBookshelfPrimary p-10 duration-500 hover:drop-shadow-2xl lgmob:h-[28rem] tab:order-2 tab:h-[35rem] tab:w-[30%] tab:gap-20 des:tab:h-[40rem]">
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
                </div>
              </article>
              <div className="relative tab:flex-1 tab:perspective-1600">
                <article className="flex h-[24rem] w-full flex-col gap-10 rounded-round bg-DigiBookshelfPrimary p-10 duration-500 hover:drop-shadow-2xl hover:rotate-y-0 lgmob:h-[28rem] tab:h-[35rem] tab:gap-20 tab:rotate-y-30 tab:transform des:tab:h-[40rem]">
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
                  </div>
                </article>
              </div>
              <div className="tab:order-3 tab:flex-1 tab:perspective-1600">
                <article className="flex h-[24rem] w-full flex-col gap-5 rounded-round bg-DigiBookshelfPrimary p-10 duration-500 hover:drop-shadow-2xl hover:rotate-y-0 lgmob:h-[28rem] tab:h-[35rem] tab:-rotate-y-30 tab:transform des:tab:h-[40rem]">
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
                    </div>
                    {/* second row */}
                  </div>
                </article>
              </div>
            </section>
          </Reveal>
        </section>
      </main>
      <footer className="relative z-[2] flex items-center justify-center px-4 py-16 font-medium text-DigiBookshelfPrimary backdrop-blur-[2px]">
        <p className="">Copyright © 2023 Nima Bargestan</p>
      </footer>

      <Particles
        className="absolute z-[0]"
        id="tsparticles"
        init={particlesInit}
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
              value: "#6936F5",
            },
            links: {
              color: "#7b51ef",
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
    </>
  );
};

export default ProjectDigiBookShelf;
