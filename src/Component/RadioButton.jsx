import { useState } from 'react';

const RadioButton = (props) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex justify-start gap-5 mt-[26px]">
            <button id="form__button-true" onClick={() => handleOptionChange("true")} className={`px-4 py-2 border border-gray-200  rounded-3xl w-36 flex items-center justify-end gap-10 text-base`}  >
            {props.confirmation}
                <input type="radio" checked={selectedOption === "true"} className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200" />
            </button>
            <button onClick={() => handleOptionChange("false")} className={`px-4 py-2 border border-gray-200 rounded-3xl w-36 flex items-center justify-end gap-8 text-base`}>
                {props.denial}
                <input type="radio" id="form__input-false" checked={selectedOption === "false"} className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200" />
            </button>
        </div>
    )
}
export default RadioButton;