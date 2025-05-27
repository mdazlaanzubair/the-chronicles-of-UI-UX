import profile_pic from "../assets/profile.jpeg";
import { FaPhone } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import FooterBtn from "./FooterBtn";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const Footer = () => {
  const navigate = useNavigate();

  const social_links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
      username: "mdazlaanzubair",
      icon: <FaLinkedin />,
    },
    {
      title: "Github",
      url: "https://github.com/mdazlaanzubair",
      username: "mdazlaanzubair",
      icon: <TbBrandGithubFilled />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
      username: "mdazlaanzubair",
      icon: <FaTwitter />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mdazlaanzubairr/",
      username: "mdazlaanzubairr",
      icon: <PiInstagramLogoFill />,
    },
    {
      title: "Calendly",
      url: "https://calendly.com/mdazlaanzubair/virtual-interaction/",
      username: "mdazlaanzubair",
      icon: <TbBrandGithubFilled />,
    },
  ];

  const footer_navigation = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Credentials",
      url: "/credentials",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      <div className="w-full h-auto grid grid-cols-2 gap-3">
        {social_links.length &&
          social_links.map(
            (link, index) =>
              link.title !== "Calendly" && (
                <div className="col-span-1" key={index}>
                  <FooterBtn
                    mode="light"
                    label={link.title}
                    username={link.username}
                    icon_1={link.icon}
                    icon_2={<MdArrowOutward />}
                    onClickHandler={() => window.open(link.url, "_blank")}
                  />
                </div>
              )
          )}
        <div className="col-span-2">
          <FooterBtn
            mode="dark"
            label="Book a call"
            icon_1={<FaPhone />}
            icon_2={<MdArrowOutward />}
            onClickHandler={() => window.open(social_links[3].url, "_blank")}
          />
        </div>
      </div>
      <section
        id="footer-section"
        className="relative w-full h-auto flex flex-col justify-center items-center p-5 lg:py-5 lg:px-3 bg-base-content rounded-lg border-4 overflow-hidden border-base-content text-base-200"
      >
        <div className="w-fit flex flex-col items-center justify-center gap-3 mb-7 mx-auto">
          <div className="avatar shrink">
            <div className="w-16 rounded-full">
              <img src={profile_pic} alt="profile pic" />
            </div>
          </div>
          <div className="grow text-center">
            <h1 className="text-[18px] font-normal text-base-200 mb-0">
              Md. Azlaan Zubair
            </h1>
            <h2 className="text-[14px] font-normal text-base-200/60">
              Web Engineer
            </h2>
          </div>
        </div>
        <nav className="w-fit flex flex-wrap justify-center items-center gap-0 lg:gap-1">
          {footer_navigation.length &&
            footer_navigation.map((menu_item, index) => (
              <button
                key={index}
                className={`btn text-[12px] w-fit btn-ghost btn-sm group relative overflow-hidden border-transparent bg-transparent shadow-none btn-default text-base-200/60`}
                onClick={() => navigate(menu_item.url)}
              >
                <div className="whitespace-nowrap top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
                  {menu_item.title}
                </div>
                <div className="absolute whitespace-nowrap top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
                  {menu_item.title}
                </div>
              </button>
            ))}
        </nav>
      </section>
      <SectionHeader
        mode="light"
        id="copy-right-section"
        title={`Created with ❤️ by Md Azlaan Zubair`}
      />
    </>
  );
};

export default Footer;
