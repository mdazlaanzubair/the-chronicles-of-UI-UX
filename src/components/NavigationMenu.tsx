import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../utils/animationVarients";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const navigation_links = [
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

  if (navigation_links.length > 0) {
    return (
      <div className="dropdown dropdown-end">
        <button
          className={`btn w-14 btn-ghost btn-sm group relative overflow-hidden border-transparent bg-transparent shadow-none btn-default`}
          tabIndex={1}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
            Menu
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
            Open
          </div>
        </button>
        <motion.ul
          tabIndex={1}
          variants={parentVariantFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="menu dropdown-content rounded-b-2xl bg-base-200 z-1 mt-3 w-52 p-2"
        >
          {navigation_links.map((menu_item, index) => (
            <motion.li variants={childVariantFadeIn} key={index}>
              <a onClick={() => navigate(menu_item.url)}>{menu_item.title}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  }
};

export default NavigationMenu;
