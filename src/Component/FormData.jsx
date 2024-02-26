import LineProgresBar from "./LineProgresBar";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import Form from "./Form";




const FormData = () => {
    return (
        <div className="bg-white p-10 pb-1 rounded-xl h-[616px] w-[575px]">
            <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">İş təcrübəsi</h2>
            <LineProgresBar />
            <div className="mt-5">
                <div className=" UserData w-[490px] h-[35px] rounded-3xl border border-slate-200 flex justify-between items-center px-2 mt-[10px]">
                    <p className="text-gray-400"> 1. BMU, Computer Science</p>
                    <div className="w-[1px]     h-[35px] bg-slate-200"></div>
                    <p className="w-36 text-gray-400">10/2022 - 03/2023 </p>
                    <div className="w-[1px] h-[35px] bg-slate-200"></div>
                    <div className="w-[50px]">
                        <AiOutlineCloseCircle className="text-red-500" />
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <button className="bg-gray-200 w-[253px] h-9 rounded-3xl mt-[30px]">Yeni iş yeri əlavə et + </button>
            </div>

        </div>
    )
}

export default FormData 