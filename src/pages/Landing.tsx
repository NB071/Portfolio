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
        <img
          src={HeadshotLanding}
          className="relative -top-[4.2rem] z-10 h-[15rem] mob:left-14 mob:m-auto tab:right-0 tab:ml-auto tab:h-[20rem] des:h-[25rem]"
          alt=""
        />

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
