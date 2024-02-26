import { useState } from "react";
import LineProgresBar from "./LineProgresBar"
import RadioButton from "./RadioButton"


const FormSpesialData = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    // Öğe seçme işlevi
    const handleItemClick = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(item => item !== index)); // Seçiliyse seçimi kaldır
        } else {
            setSelectedItems([...selectedItems, index]); // Değilse seç
        }
    };

    return (
        <div className=" w-[575px] h-[616px] bg-white p-10 pb-1 rounded-xl">
            <div className="">
                <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">Xüsusi bacarıqlar</h2>
                <LineProgresBar />
                <h3 className="w-fit ml-2">Xüsusi bacarığınız var?* </h3>
                <RadioButton confirmation='Bəli' denial='Xeyr' />
            </div>
            <div>
                <p>Hansı xüsusi bacarığınız var?</p>
                <ul className="divide-y divide-gray-200">
                    {['Rəsm', 'Musiqi', 'Rəqs', 'Yazıçılıq'].map((activity, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            className={`py-2 px-4 cursor-pointer ${selectedItems.includes(index) ? 'bg-blue-200' : ''}`}
                        >
                            {activity}
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}

export default FormSpesialData