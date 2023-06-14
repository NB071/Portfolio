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
import DigiBookshelfAddFriend from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-AddFriend.png";
import DigiBookshelfUserModal from "@/assets/projectScreenshots/DigiBookshelf/digiBookshelf-UserModal.png";

// Components
import Header from "@/components/Header/Header";

import { Reveal } from "@/utils/Reveal";

// icons
import { GithubIcon } from "@/utils/ImportSocialLogos";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const ProjectDigiBookShelf = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header
        variant="projectPages"
        bg="#6936f5e8"
  
      />

      <main className="relative z-[1] backdrop-blur-[3px]">
        <Reveal>
          <section
            id="intro"
            className="max-w-[1920px] des:mx-auto mx-4 mt-36 duration-500 hover:scale-95"
          >
            <div className="flex justify-center">
              <div className="flex h-[20rem] w-full flex-col items-center justify-center gap-8 rounded-round bg-DigiBookshelfPrimary p-16 tab:w-[40rem]">
                <img
                  src={DigiBookshelfLogo}
                  alt="Digi bookshelf logo"
                  className="tab:scale-150"
                />
                <div className="flex h-full w-full justify-center gap-5 tab:gap-10 ">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-min">
                      <h3 className="text-xs tab:text-base">Demo: </h3>
                      <p className="mt-2 text-[.6rem] underline tab:w-20">
                        Sample credenials
                      </p>
                    </div>
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
          </section>
        </Reveal>
        <Reveal>
          <section id="description" className="mt-20 max-w-[1920px] des:mx-auto mx-4 tab:mx-10">
            <div className="flex items-center">
              <div className="w-14 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
              <h2 className="mx-4 text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
                Description
              </h2>
              <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary"></div>
            </div>
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
          </section>
        </Reveal>
        <Reveal>
          <section id="demo" className="mt-20 max-w-[1920px] des:mx-auto mx-4 tab:mx-10">
            <div className="flex items-center">
              <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary tab:w-32"></div>
              <h2 className="mx-4  text-2xl font-bold text-DigiBookshelfPrimary tab:text-4xl">
                Demo
              </h2>
              <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-DigiBookshelfPrimary"></div>
            </div>
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
                  <h3 className="flex-1 font-bold text-white">
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
          </section>
        </Reveal>
      </main>

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
