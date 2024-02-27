import { useState } from "react";
import LineProgresBar from "./LineProgresBar";
import RadioButton from "./RadioButton";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormSpesialData = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isListVisible, setListVisible] = useState(false);
    const specialAblities = ["Rəsm", "Musiqi", "Rəqs", "Yazıçılıq"];
    const [lastSelectedItem, setLastSelectedItem] = useState("");
    const [abilityVisible, setAbilityVisible] = useState(false); // Başlangıçta gizli

    const handleItemClick = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter((item) => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
            setLastSelectedItem(specialAblities[index]);
        }
    };

    const handleListVisibility = () => {
        setListVisible(!isListVisible);
    };

    const handleAbilityVisibility = (option) => {
        if (option === "Bəli") {
            setAbilityVisible(true);
        } else {
            setAbilityVisible(false);
        }
    };

    return (
        <div className="w-[575px] h-[616px] bg-white p-10 pb-1 rounded-xl">
            <div className="">
                <h2 className="text-emerald-900  text-xl w-fit ml-2 mb-[18px]">
                    Xüsusi bacarıqlar
                </h2>
                <LineProgresBar />
                <h3 className="w-fit ml-2">Xüsusi bacarığınız var?* </h3>
                <div className="mt-[26px] ">
                    <RadioButton confirmation="Bəli" denial="Xeyr" handleVisibility={handleAbilityVisibility} />
                </div>
            </div>

            {abilityVisible && (
                <div className="ABILITY">
                    <p className="mt-[30px] mx-3">Hansı xüsusi bacarığınız var?</p>
                    <div
                        onClick={handleListVisibility}
                        className="w-[490px] bg-gray-200 text-gray-400 px-5 flex items-center rounded-3xl h-9 cursor-pointer absolute"
                    >
                        {lastSelectedItem}
                        {isListVisible && (
                            <div className="w-[490px] bg-gray-200 rounded-3xl mt-1 p-2">
                                <ul className=" absolute left-3 rounded-3xl p-3 top-9 w-40 bg-gray-200">
                                    {specialAblities.map((activity, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleItemClick(index)}
                                            className={`py-1 px-4 cursor-pointer text-gray-600 z-10 mt-1 ${
                                                selectedItems.includes(index) ? "bg-blue-200 rounded-3xl w-36 " : ""
                                            }`}
                                        >
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {selectedItems.length > 0 && abilityVisible&&(
                <div className="mt-14">
                    {selectedItems.map((index) => (
                        <div key={index} className=" z-[-1] flex justify-between items-center mt-2">
                            <div className=" w-[150px] h-[42px] bg-gray-300 flex justify-between items-center rounded-3xl px-5  pl-11  text-gray-600 ">
                                {["Rəsm", "Musiqi", "Rəqs", "Yazıçılıq"][index]}
                                <AiOutlineCloseCircle className="text-red-500" />
                            </div>
                            <RadioButton confirmation="Həvəskar" denial="Peşəkar" />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default FormSpesialData;
