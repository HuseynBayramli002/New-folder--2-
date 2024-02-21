import { useState } from "react";
const Footer = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <div className="flex justify-between w-[575px] px-10 p-10">
      <button
        className={`px-4 py-2 border border-teal-600 rounded-3xl w-[155px] flex items-center justify-center gap-2 text-base text-teal-600 hover:bg-teal-600 hover:text-white duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
        >
          <path
            d="M9.3625 17.275C9.5375 17.075 9.6215 16.8334 9.6145 16.55C9.6075 16.2667 9.51621 16.025 9.34062 15.825L6.86875 13H16.625C16.8729 13 17.0809 12.904 17.2489 12.712C17.4169 12.52 17.5006 12.2827 17.5 12C17.5 11.7167 17.416 11.479 17.248 11.287C17.08 11.095 16.8723 10.9994 16.625 11H6.86875L9.3625 8.15005C9.5375 7.95005 9.625 7.71238 9.625 7.43705C9.625 7.16172 9.5375 6.92438 9.3625 6.72505C9.1875 6.52505 8.97954 6.42505 8.73862 6.42505C8.49771 6.42505 8.29004 6.52505 8.11562 6.72505L4.1125 11.3C4.025 11.4 3.96287 11.5084 3.92612 11.625C3.88937 11.7417 3.87129 11.8667 3.87187 12C3.87187 12.1334 3.89025 12.2584 3.927 12.375C3.96375 12.4917 4.02558 12.6 4.1125 12.7L8.1375 17.3C8.29791 17.4834 8.49829 17.575 8.73862 17.575C8.97896 17.575 9.18691 17.475 9.3625 17.275Z"
            fill="currentColor"
          />
        </svg>
        Geri
      </button>
      <button
        className={`px-4 py-2 border  border-teal-600 rounded-3xl w-[155px] flex items-center justify-center gap-2 text-base text-teal-600  hover:bg-teal-600 hover:text-white duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
      >
        Növbəti
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
        >
          <path
            d="M13.3 17.275C13.1 17.075 13.004 16.8334 13.012 16.55C13.02 16.2667 13.1243 16.025 13.325 15.825L16.15 13H5C4.71667 13 4.479 12.904 4.287 12.712C4.095 12.52 3.99934 12.2827 4 12C4 11.7167 4.096 11.479 4.288 11.287C4.48 11.095 4.71734 10.9994 5 11H16.15L13.3 8.15005C13.1 7.95005 13 7.71238 13 7.43705C13 7.16172 13.1 6.92438 13.3 6.72505C13.5 6.52505 13.7377 6.42505 14.013 6.42505C14.2883 6.42505 14.5257 6.52505 14.725 6.72505L19.3 11.3C19.4 11.4 19.471 11.5084 19.513 11.625C19.555 11.7417 19.5757 11.8667 19.575 12C19.575 12.1334 19.554 12.2584 19.512 12.375C19.47 12.4917 19.3993 12.6 19.3 12.7L14.7 17.3C14.5167 17.4834 14.2877 17.575 14.013 17.575C13.7383 17.575 13.5007 17.475 13.3 17.275Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <style >{`
        svg:hover,
        svg.hovered {
          fill: #fff;
        }
      `}</style>
    </div>
  );
};

export default Footer;
