import LineProgresBar from "./LineProgresBar";
import { AiOutlineCloseCircle } from "react-icons/ai";




const FormData = () => {
    return (
        <div className="bg-white p-10 pb-1 rounded-xl h-[616px] w-[575px]">
            <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">İş təcrübəsi</h2>
            <LineProgresBar />
            <div className="mt-5">
                <div className=" w-[490px] h-[35px] flex justify-between items-center mt-[10px] border rounded-3xl px-2 relative">
                    <div className="flex justify-start items-center h-[35px]  border-gray-200 ">
                        <p className="text-gray-400 text-sm"> 1. BMU, Computer Science</p>
                    </div>
                    <div className="w-[144px] h-[35px] flex justify-center items-center absolute right-[50px] border-l-1 border border-gray-200">
                        <p className="text-gray-400 text-sm">10/2022 - 03/2023 </p>
                    </div>
                    <div className=" border-gray-200 w-[50px] flex justify-center items-center">
                        <AiOutlineCloseCircle className="text-red-500" />
                    </div>
                </div>
                <div className=" w-[490px] h-[35px] flex justify-between items-center mt-[10px] border rounded-3xl px-2 relative">
                    <div className="flex justify-start items-center h-[35px]  border-gray-200 ">
                        <p className="text-gray-400 text-sm"> 2. QSS Analytics, Product Manager</p>
                    </div>
                    <div className="w-[144px] h-[35px] flex justify-center items-center absolute right-[50px] border-l-1 border border-gray-200">
                        <p className="text-gray-400 text-sm">10/2022 - 03/2023 </p>
                    </div>
                    <div className=" border-gray-200 w-[50px] flex justify-center items-center">
                        <AiOutlineCloseCircle className="text-red-500" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-200 w-[253px] h-9 rounded-3xl mt-[30px] duration-300 ease-in-out hover:bg-slate-300 ">Yeni iş yeri əlavə et + </button>
            </div>

        </div>
    )
}

export default FormData 