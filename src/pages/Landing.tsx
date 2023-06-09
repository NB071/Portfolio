import HeadshotLanding from "@/assets/Headshot-landing.svg";

// Blur Circle svgs
import BlurCircleLightBrown from "@/assets/bgBlurCircles/bgBlurCircleLightBrown.svg";
import BlurCircleDarkBrown from "@/assets/bgBlurCircles/bgBlurCircleDarkBrown.svg";
import BlurCircleDarkGray from "@/assets/bgBlurCircles/bgBlurCircleDarkGray.svg";

// type Props = {}

const Landing = () => {
  return (
    // Landing page
    <>
      <section className="relative m-auto h-screen w-screen overflow-hidden">
        <img src={HeadshotLanding} className="relative z-10 ml-auto" alt="" />

        {/* bg circles */}
        <img
          src={BlurCircleDarkBrown}
          className="absolute left-0 top-7 animate-scale"
          alt=""
        />
        <img
          src={BlurCircleLightBrown}
          className="absolute right-0 top-2 animate-scale"
          alt=""
        />
        <img
          src={BlurCircleDarkGray}
          className="absolute inset-0 m-auto animate-scale"
          alt=""
        />
      </section>
    </>
  );
};

export default Landing;
