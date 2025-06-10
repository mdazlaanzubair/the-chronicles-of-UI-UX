import Marquee from "react-fast-marquee";

interface Icon {
  src: string | any;
  title: string| any;
}

type Props = {
  icons: Icon[];
};

export const IconSlider = (props: Props) => {
  return (
    <section
      id="icon-section"
      className="flex flex-col w-full bg-base-100 rounded-lg px-3 py-5 border border-base-300"
    >
      <Marquee
        autoFill
        pauseOnHover
        direction="left"
        speed={15}
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #fff, #fff, #fff, #fff, #fff, #fff, transparent)",
        }}
      >
        {props.icons?.map((logo, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center mx-5 rounded-lg cursor-pointer gap-3"
          >
            <img
              className="shrink object-fill w-6 h-6 transition-all ease-in-out duration-300"
              src={logo?.src}
              alt={logo?.title + "-logo"}
              title={logo?.title}
            />
            <span className="grow text-base-content/60 group-hover:text-base-content whitespace-nowrap transition-all ease-in-out duration-300">
              {logo.title}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// export default IconSlider;
