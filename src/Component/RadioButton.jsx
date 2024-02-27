import { useState } from 'react';
import PropTypes from 'prop-types'


const RadioButton = (props) => {
    const {confirmation,denial,handleVisibility}=props;

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        handleVisibility(option); // handleVisibility'i çağırarak gizlenme durumunu güncelle
    };

    return (
        <div className="flex justify-between px-5 gap-2">
            <label htmlFor="form__button-true" className="cursor-pointer">
                <button
                    id="form__button-true"
                    onClick={() => handleOptionChange("Bəli")}
                    className={`px-4 py-2 border pl-7 border-gray-200 rounded-3xl w-36 flex items-center justify-between text-base ${selectedOption === "Bəli" ? "bg-gray-200" : ""
                        }`}
                >
                    {confirmation}
                    <input
                        type="radio"
                        id="form__input-true"
                        checked={selectedOption === "Bəli"}
                        className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200"
                    />
                </button>
            </label>
            <label htmlFor="form__button-false" className="cursor-pointer">
                <button
                    id="form__button-false"
                    onClick={() => handleOptionChange("Xeyr")}
                    className={`px-4 py-2 pl-7 border border-gray-200 rounded-3xl w-36 flex items-center justify-between text-base ${selectedOption === "Xeyr" ? "bg-gray-200" : ""
                        }`}
                >
                    {denial}
                    <input
                        type="radio"
                        id="form__input-false"
                        checked={selectedOption === "Xeyr"}
                        className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200"
                    />
                </button>
            </label>
        </div>
    )
}

export default RadioButton;

RadioButton.propTypes = {
    confirmation: PropTypes.string.isRequired,
    denial: PropTypes.string.isRequired,
    handleVisibility: PropTypes.func.isRequired, 
};