import { useState } from 'react';

const RadioButton = (props) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex justify-between px-5 gap-2">
            <label htmlFor="form__button-true" className="cursor-pointer">
                <button
                    id="form__button-true"
                    onClick={() => handleOptionChange("true")}
                    className={`px-4 py-2 border pl-7 border-gray-200 rounded-3xl w-36 flex items-center justify-between text-base ${selectedOption === "true" ? "bg-gray-200" : ""
                        }`}
                >
                    {props.confirmation}
                    <input
                        type="radio"
                        id="form__input-true"
                        checked={selectedOption === "true"}
                        className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200"
                    />
                </button>
            </label>
            <label htmlFor="form__button-false" className="cursor-pointer">
                <button
                    id="form__button-false"
                    onClick={() => handleOptionChange("false")}
                    className={`px-4 py-2 pl-7 border border-gray-200 rounded-3xl w-36 flex items-center justify-between text-base ${selectedOption === "false" ? "bg-gray-200" : ""
                        }`}
                >
                    {props.denial}
                    <input
                        type="radio"
                        id="form__input-false"
                        checked={selectedOption === "false"}
                        className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200"
                    />
                </button>
            </label>
        </div>
    )
}

export default RadioButton;
