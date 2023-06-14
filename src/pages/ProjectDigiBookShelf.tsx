// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// Logo svg
import DigiBookshelfLogo from "@/assets/projectsLogo/DigiBookshelfLogo.svg";
import DigiBookshelfBG from "@/assets/projectsLogo/DigiBookshelfLogoBG.png"
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

// icons
import { GithubIcon } from "@/utils/ImportSocialLogos";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const ProjectDigiBookShelf = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header variant="projectPages" bg="#6936F5" textColor="white" />
      <main className="relative z-[1] m-auto h-full max-w-[1920px] backdrop-blur-[2px]">
        <section id="intro" className="mt-36 hover:scale-95 duration-500 mx-4">
          <div className="flex justify-center">
            <div className="flex h-[20rem] w-full flex-col items-center justify-center gap-8 rounded-round bg-[#6936F5] p-16 tab:w-[40rem]">
              <img
                src={DigiBookshelfLogo}
                alt="Digi bookshelf logo"
                className="tab:scale-150"
              />
              <div className="flex h-full w-full justify-center tab:gap-10 gap-5 ">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-min">
                    <h3 className="text-xs tab:text-base">Demo: </h3>
                    <p className="tab:w-20 text-[.6rem] underline mt-2">Sample credenials</p>
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
        <section id="description" className="px-2 tab:px-10 mt-20">
        <div className="flex items-center">
            <div className="w-14 rounded-l-round rounded-r-round border-t-2 border-[#6936F5] tab:w-32"></div>
            <h2 className="mx-4 text-2xl font-bold text-[#6936F5] tab:text-4xl">
            Description
            </h2>
            <div className="flex-1 rounded-l-round rounded-r-round border-t-2 border-[#6936F5]"></div>
          </div>
          <section className="mt-12">
            <img src={DigiBookshelfBG} alt="Digi Bookshelf logo" className="relative z-[4] mx-auto mb-6 drop-shadow-2xl w-64 tab:w-96 des:w-auto" />
            <div className="bg-[#6535e8] relative -top-16 px-10 py-20 rounded-round z-[3]">
            <p className="indent-12 font-medium leading-8 text-white">This website is a platform for managing and tracking your books. It allows users to easily record the books they are reading and make daily entries or drop a book if they decide to stop reading it. The goal is to increase productivity for readers particularly in their careers. The platform also aims to simplify the process of tracking books as existing options can be overwhelming. Users can sign up store and track their books discover new titles and potentially read along with friends. The design focuses on simplicity and ease of use. It provides a centralized solution for storing and managing books digitally. Additionally users can set goals for the number of books they want to read. The platform offers high availability across devices and ensures that users can remember the books they have read over time.</p>
            </div>
          </section>
        </section>
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
    </>
  );
};

export default ProjectDigiBookShelf;
