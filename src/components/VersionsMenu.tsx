import { BiLinkExternal } from "react-icons/bi";

const VersionsMenu = () => {
  const version_links = [
    {
      title: "latest (v4)",
      url: "/",
    },
    {
      title: "v3.0 (2024)",
      url: "https://v3.mdazlaanzubair.com/",
    },
    {
      title: "v2.0 (2023)",
      url: "https://v2.mdazlaanzubair.com/",
    },
    {
      title: "v1.0 (2019)",
      url: "https://v1.mdazlaanzubair.com/",
    },
  ];

  if (version_links.length > 0) {
    return (
      <div className="fixed top-0 left-0 dropdown hidden lg:block">
        <button
          className={`btn btn-ghost btn-sm group relative overflow-hidden border-transparent bg-transparent shadow-none btn-default`}
          tabIndex={1}
        >
          Portfolio Versions
        </button>
        <ul
          tabIndex={1}
          className="menu dropdown-content rounded-lg bg-base-200 z-1 ml-3 w-36 p-2"
        >
          <strong className="text-[8px] text-base-content/60 font-semibold uppercase mb-1">
            Portfolio Versions
          </strong>
          {version_links.map((link, index) => (
            <li key={index}>
              <a className="flex items-center justify-between" target={index === 0 ? "" : "_blank"} href={link.url}>
                {link.title} {index > 0 && <BiLinkExternal />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default VersionsMenu;
