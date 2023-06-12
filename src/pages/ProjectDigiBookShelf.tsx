import "swiper/css";
import "swiper/css/free-mode";

// Libs
import { Link } from "react-router-dom";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback, useState, CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

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

import {
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ProjectDigiBookShelf = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(
    DigiBookshelfDashboard
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="relative z-[1] flex h-full w-full flex-col gap-7 backdrop-blur-[2px] tab:flex-row tab:gap-0">
        <aside className="sticky h-[22.5rem] w-full bg-[#6936F5] drop-shadow-2xl tab:h-full tab:max-w-[20rem] tab:overflow-y-auto">
          <Link to="/" className="">
            <div className="mb-14 flex items-center justify-center gap-4 border-b-[1px] pb-6 pt-10 text-white tab:sticky tab:top-0 tab:z-10 tab:flex-row tab:gap-0 tab:bg-[#6936F5] tab:drop-shadow-2xl">
              <ArrowLeftOnRectangleIcon className="w-8" />
              <img
                src={DigiBookshelfLogo}
                className=""
                alt="Digi Bookshelf Logo"
              />
            </div>
          </Link>

          <div className="flex hover:cursor-grab active:cursor-grabbing tab:hidden">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
            >
              <SwiperSlide>
                <img
                  src={DigiBookshelfDashboard}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfDashboard &&
                      setSelectedScreenshot(DigiBookshelfDashboard);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf dashboard screenshot"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfManage}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfManage &&
                      setSelectedScreenshot(DigiBookshelfManage);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf manage screenshot"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfMyShelf}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfMyShelf &&
                      setSelectedScreenshot(DigiBookshelfMyShelf);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf my-shelf screenshot"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfUserProfile}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfUserProfile &&
                      setSelectedScreenshot(DigiBookshelfUserProfile);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf user profile screenshot "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfSignleBook}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfSignleBook &&
                      setSelectedScreenshot(DigiBookshelfSignleBook);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf sigle book info screenshot "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfAddFriend}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfAddFriend &&
                      setSelectedScreenshot(DigiBookshelfAddFriend);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf adding friend screenshot"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={DigiBookshelfUserModal}
                  onClick={() => {
                    selectedScreenshot !== DigiBookshelfUserModal &&
                      setSelectedScreenshot(DigiBookshelfUserModal);
                    setIsModalOpen(true);
                  }}
                  className="h-32 cursor-pointer rounded-round duration-500 hover:contrast-50"
                  alt="Digi-Bookshelf user modal screenshot"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden flex-wrap justify-center gap-4 tab:flex tab:flex-col tab:px-6">
            <img
              src={DigiBookshelfDashboard}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfDashboard &&
                  setSelectedScreenshot(DigiBookshelfDashboard);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf dashboard screenshot"
            />
            <img
              src={DigiBookshelfManage}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfManage &&
                  setSelectedScreenshot(DigiBookshelfManage);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf manage screenshot"
            />
            <img
              src={DigiBookshelfMyShelf}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfMyShelf &&
                  setSelectedScreenshot(DigiBookshelfMyShelf);
                setIsModalOpen(true);
              }}
              className=" h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf my-shelf screenshot"
            />
            <img
              src={DigiBookshelfUserProfile}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfUserProfile &&
                  setSelectedScreenshot(DigiBookshelfUserProfile);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf user profile screenshot"
            />
            <img
              src={DigiBookshelfSignleBook}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfSignleBook &&
                  setSelectedScreenshot(DigiBookshelfSignleBook);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf single book info screenshot "
            />
            <img
              src={DigiBookshelfAddFriend}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfAddFriend &&
                  setSelectedScreenshot(DigiBookshelfAddFriend);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf adding friend screenshot"
            />
            <img
              src={DigiBookshelfUserModal}
              onClick={() => {
                selectedScreenshot !== DigiBookshelfUserModal &&
                  setSelectedScreenshot(DigiBookshelfUserModal);
                setIsModalOpen(true);
              }}
              className="h-40 cursor-pointer rounded-round duration-500 hover:contrast-50"
              alt="Digi-Bookshelf user modal screenshot"
            />
          </div>
        </aside>
        <section className="relative z-[2] mx-2 h-[20rem] w-3/4 overflow-hidden rounded-round bg-[#6936F5]">
          <nav className="flex h-full items-end justify-center gap-6 p-7 text-white">
            <Link to="#description" className="group relative">
              Description
              <div className="absolute -bottom-32 h-2 w-2 rounded-full bg-[#7c50f5] duration-500 group-hover:-bottom-24 group-hover:h-24 group-hover:w-24"></div>
            </Link>

            <span className="font-thin opacity-60">|</span>
            <Link to="#demo" className="group relative">
              Demo
              <div className="absolute -bottom-32 -left-6 h-2 w-2 rounded-full bg-[#7c50f5] duration-500 group-hover:-bottom-24 group-hover:h-24 group-hover:w-24"></div>
            </Link>
            <span className="font-thin opacity-60">|</span>
            <Link to="#features" className="group relative">
              Features
              <div className="absolute -bottom-32 -left-3 h-2 w-2 rounded-full bg-[#7c50f5] duration-500 group-hover:-bottom-24 group-hover:h-24 group-hover:w-24"></div>
            </Link>
            <span className="font-thin opacity-60">|</span>
            <Link to="#stack" className="group relative">
              Stack
              <div className="absolute -bottom-32 -left-6 h-2 w-2 rounded-full bg-[#7c50f5] duration-500 group-hover:-bottom-24 group-hover:h-24 group-hover:w-24"></div>
            </Link>
          </nav>
          <img
            src={DigiBookshelfLogo}
            className="absolute inset-0 m-auto min-w-[20rem] "
            alt=""
          />
        </section>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 z-[5] h-full max-w-[1920px]">
          <div className="absolute inset-0 z-[6] m-auto h-[25rem] max-w-[300px] overflow-hidden rounded-round bg-[#6936F5] tab:h-[30rem] tab:max-w-[600px] des:max-w-[720px]">
            <div className="relative h-full pb-28">
              {selectedScreenshot && (
                <img
                  src={selectedScreenshot}
                  className="h-[19rem] w-full drop-shadow-2xl tab:h-[24rem]"
                  alt="Project screenshot"
                />
              )}

              <div className="absolute bottom-7 flex w-full cursor-pointer justify-center text-white">
                <XMarkIcon
                  className="w-12 rounded-round p-1 duration-500 hover:bg-[#8a6fd568]"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedScreenshot(null);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-[4] bg-white opacity-40 backdrop-blur-md"></div>
        </div>
      )}
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
