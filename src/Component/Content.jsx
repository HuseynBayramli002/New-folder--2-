import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Form from "./Form";
import FormData from "./FormData";

const Content = () => {
  const [hovered, setHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <div className="flex flex-col mt-2 justify-between  w-[575px] h-[611px]">

      <div className="PAGES">


        {currentPage === 1 && <div><Form /></div>}
        {currentPage === 2 && <div><FormData /></div>}
      </div>

      <div className="flex justify-between items-center">
        {currentPage > 1 &&
          <button
            className={`px-4 py-2 border border-teal-600 rounded-3xl w-[155px] flex items-center justify-center gap-2 text-base text-teal-600 hover:bg-teal-600 hover:text-white duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onClick={goToPreviousPage}
          >
            <FaArrowLeftLong />
            Geri
          </button>
        }

        {currentPage < totalPages &&
          <button
            className={`px-4 py-2 border  border-teal-600 rounded-3xl w-[155px] flex items-center justify-center gap-2 text-base text-teal-600  hover:bg-teal-600 hover:text-white duration-300 ease-in-out ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onClick={goToNextPage}
          >
            Növbəti
            <FaArrowRightLong />
          </button>
        }
      </div>
    </div>
  );
};

export default Content;
