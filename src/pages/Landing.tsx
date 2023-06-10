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
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Landing = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    // Landing page
    <>
      <section id="intro" className="relative z-[2]">
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
        <section>
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
                title="About me"
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
              className="relative h-[8rem] cursor-pointer overflow-hidden rounded-round border-none bg-[#69533E] duration-500 hover:scale-95 group tab:h-[11rem] des:h-[24.5rem]  des:flex-1"
              title="About me"
            >
              <div className="relative z-10 flex h-full flex-col justify-between px-9 py-5 des:px-12 des:py-9">
                <div className="flex w-full items-center justify-between">
                  <h3 className="align-bottom text-base text-white-text des:text-3xl">
                    Work
                  </h3>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-Light-brown tab:h-12 tab:w-12 des:h-14 des:w-14 ">
                    <PaperClipIcon className=" w-7 p-2 text-white-text tab:w-8 des:w-9" />
                  </div>
                </div>
                <div className=" animate-marqeeAnimation whitespace-nowrap">
                  <h3 className="group-hover:opacity-0 duration-300 hidden text-6xl font-medium text-white-text des:block">
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
                className="absolute inset-0 z-[1] m-auto h-20 animate-rotate tab:h-24 des:h-28 group-hover:contrast-200	duration-300 "
                alt="rotating shapes"
              />
            </article>
          </div>
        </section>
        {/* bg circles */}
      </section>
      <Particles
        className="absolute z-[0]"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
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

export default Landing;
