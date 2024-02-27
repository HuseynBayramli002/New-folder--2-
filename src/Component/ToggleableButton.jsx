import { useState } from 'react';

const ToggleableButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive); // Aktif durumu tersine çevir
    };

    return (
        <div className='flex justify-between'>
            <input
                type="text"
                className={`w-[318px] h-9 text-gray-600 bg-gray-200 focus:outline-none px-3 rounded-3xl ${isActive ? "pointer-events-none" : ""}`}
                disabled={isActive} // Etkin olduğunda inputu devre dışı bırak
                placeholder={isActive ? 'Əfsuski' : ''} // placeholder'ı dinamik olarak değiştir
            />
            <button
                onClick={handleButtonClick}
                className={`px-4 py-2 pl-7 w-[152px] border border-gray-200 rounded-3xl h-9 flex items-center justify-between text-base ${isActive ? "bg-gray-200" : ""}`}
            >
                Yoxdur
                <input
                    type="radio"
                    checked={isActive} // Aktif duruma göre kontrol edilir
                    className="w-3 h-3 appearance-none rounded-full checked:bg-emerald-700 border border-gray-200"
                />
            </button>
        </div>
    );
};

export default ToggleableButton;
