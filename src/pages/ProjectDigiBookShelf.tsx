// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// Logo svg
import DigiBookshelfLogo from "@/assets/projectsLogo/DigiBookshelfLogo.svg";

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

const ProjectDigiBookShelf = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header variant="projectPages" bg="#6936F5" textColor="white"/>
      <main className="relative z-[1] m-auto h-full max-w-[1920px] backdrop-blur-[2px]">
        <section className="mt-10">
          <div className="h-[20rem] w-full rounded-round bg-[#6936F5] tab:w-[20rem]"></div>
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
