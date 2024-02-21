import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleInputClick = () => {
    setSelectedDate("");
  };

  return (
    <div className="w-60 bg-gray-200 gap-16  flex justify-end items-center rounded-2xl">
      <div className=" text-gray-800 text-[15px]"> {selectedDate}</div>
      <input
        type="date"
        className="date-input bg-gray-200 w-6 rounded-lg h-8 outline-none cursor-pointer mr-2"
        onChange={handleDateChange}
        onClick={handleInputClick} 
      />
    </div>
  );
};

export default Calendar;
