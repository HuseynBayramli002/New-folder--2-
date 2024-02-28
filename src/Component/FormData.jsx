import { useState, useEffect } from "react";
import LineProgresBar from "./LineProgresBar";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormData = () => {
    // Local storage'dan verileri almak için state tanımla
    const [enterpriseData, setEnterpriseData] = useState("");
    const [dutyData, setDutyData] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        // Local storage'dan verileri al
        const storedData = JSON.parse(localStorage.getItem("formData"));
        if (storedData) {
            setEnterpriseData(storedData.enterpriseData || "");
            setDutyData(storedData.dutyData || "");
            // Sadece ay ve yıl verisini al
            setStartDate((storedData.startDate || "").substr(0, 7)); // İlk 7 karakter (yıl ve ay)
            setEndDate((storedData.endDate || "").substr(0, 7)); // İlk 7 karakter (yıl ve ay)
        }
    }, []);

    const handleDeleteClick = () => {
        // Parent divi sil
        const parentElement = document.querySelector(".parentElement");
        parentElement.remove();
        // Local storage'dan verileri sil
        localStorage.removeItem("formData");
    };

    return (
        <>
            <div className="bg-white p-10 pb-1 rounded-xl h-[616px] w-[575px] ">
                <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">İş təcrübəsi</h2>
                <LineProgresBar progressBar={60} />
                {enterpriseData && dutyData && startDate && endDate && (
                    <div className="mt-5 parentElement">
                        <div className=" w-[490px] h-[35px] flex justify-between items-center mt-[10px] border rounded-3xl px-2 relative">
                            <div className="flex justify-start items-center h-[35px]  border-gray-200 ">
                                <p className="text-gray-400 text-sm">{enterpriseData}, {dutyData}</p>
                            </div>
                            <div className="w-[144px] h-[35px] flex justify-center items-center absolute right-[50px] border-l-1 border border-gray-200">
                                <p className="text-gray-400 text-sm">{startDate} - {endDate}</p>
                            </div>
                            <div className=" border-gray-200 w-[50px] flex justify-center items-center" onClick={handleDeleteClick}>
                                <AiOutlineCloseCircle className="text-red-500" />
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-center">
                    <button className="bg-gray-200 w-[253px] h-9 rounded-3xl mt-[30px] duration-300 ease-in-out hover:bg-slate-300 ">Yeni iş yeri əlavə et + </button>
                </div>
            </div>
        </>
    );
}

export default FormData;
