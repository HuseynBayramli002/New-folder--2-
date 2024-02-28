import { useState } from "react";
import LineProgresBar from "./LineProgresBar";
import Calendar from "./Calendar";
import RadioButton from './RadioButton';
import { GoCheck } from "react-icons/go";


const Form = () => {
  const [selectedLaborSkill, setSelectedLaborSkill] = useState("");
  const [selectedProfessionalism, setSelectedProfessionalism] = useState("");  
  const [showLaborSkillList, setShowLaborSkillList] = useState(false);
  const [showProfessionalismList, setShowProfessionalismList] = useState(false);
  const [enterpriseData, setEnterpriseData] = useState('');
  const [dutyData, setDutyData] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLaborSkillItemClick = (item) => {
    setSelectedLaborSkill(item);
    setShowLaborSkillList(false);
  };

  const handleProfessionalismItemClick = (item) => {
    setSelectedProfessionalism(item);
    setShowProfessionalismList(false);
  };

  const handleEnterpriseChange = (event) => {
    setEnterpriseData(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setEndDate(new Date().toISOString().split("T")[0]);
    } else {
      setEndDate("");
    }
  };

  const handleDutyChange = (event) => {
    setDutyData(event.target.value);
  };
  
  const handleSave = () => {
    // Local storage'a gönderme işlemi
    localStorage.setItem("formData", JSON.stringify({enterpriseData, dutyData, startDate, endDate}));
  };

  const laborskilldataData = [
    {
      id: 1,
      skilldata: "Fiziki əmək",
    },
    {
      id: 2,
      skilldata: "Sənət",
    },
    {
      id: 3,
      skilldata: "Ali ixtisas",
    },
    {
      id: 4,
      skilldata: "Sahibkar",
    },
  ];
  const professionalismData = [
    {
      id: 1,
      skilldata: "Təcrübəçi",
    },
    {
      id: 2,
      skilldata: "Kiçik mütəxəssis",
    },
    {
      id: 3,
      skilldata: "Mütəxəssiz",
    },
    {
      id: 4,
      skilldata: "Baş mütəxəssis",
    },
    {
      id: 5,
      skilldata: "Unit leader",
    },
    {
      id: 6,
      skilldata: "Departament Head ",
    },
    {
      id: 7,
      skilldata: "C-level",
    },
  ];

  return (
    <div className="bg-white p-10 pb-1 rounded-xl w-[575px] h-[616px]">
      <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">İş təcrübəsi</h2>
      <LineProgresBar progressBar={30} />
      <h3 className="w-fit ml-2"> İş təcrübəniz var? </h3>
      <div className="mt-[26px]">
        <RadioButton confirmation='Bəli' denial='Xeyr' />
      </div>

      <div>
        <div className="mt-[25px]">
          <h3 className="text-lg ml-2">Çalışdığınız müəssisənin adını qeyd edin.*;</h3>
          <input onChange={handleEnterpriseChange} value={enterpriseData} required type="text" className="w-[490px] border bg-gray-200 focus:outline-none px-3 rounded-3xl" />
        </div>
        <div className="mt-[15px]">
          <h3 className="text-lg ml-2">Vəzifənizi qeyd edin.*;</h3>
          <input onChange={handleDutyChange} value={dutyData} required type="text" className="w-[490px] border bg-gray-200 focus:outline-none px-3 rounded-3xl" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-60">
          <h3 className="ml-2 mt-[20px]">Əmək fəaliyyət forması:</h3>
          <div className="relative">
            <div className="w-60 h-7 pl-3 bg-gray-200 rounded-2xl" onClick={() => setShowLaborSkillList(!showLaborSkillList)}>
              {selectedLaborSkill}
            </div>
            {showLaborSkillList && (
              <ul className="absolute bg-slate-300 rounded-2xl w-60 top-8 py-1 pl-5">
                {laborskilldataData?.map(({ id, skilldata }) => (
                  <li key={id} onClick={() => handleLaborSkillItemClick(skilldata)}>
                    {skilldata}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="w-60">
          <h3 className="ml-2 mt-[20px]">Peşəkarlıq dərəcəsi:</h3>
          <div className="relative">
            <div className="w-60 h-7 pl-3 bg-gray-200 rounded-2xl" onClick={() => setShowProfessionalismList(!showProfessionalismList)}>
              {selectedProfessionalism}
            </div>
            {showProfessionalismList && (
              <ul className="absolute bg-slate-300 rounded-2xl w-60 top-8 py-1 pl-5">
                {professionalismData?.map(({ id, skilldata }) => (
                  <li key={id} onClick={() => handleProfessionalismItemClick(skilldata)}>
                    {skilldata}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="ml-2 mt-[10px]">İşə başlama tarixi:</h2>
            <Calendar selectedDate={startDate} setSelectedDate={setStartDate} endDate={endDate} />
          </div>
          <div>
            <h2 className="ml-2 mt-[10px]">İşdən ayrılma tarixi:</h2>
            <Calendar selectedDate={endDate} setSelectedDate={setEndDate} startDate={startDate} />
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 my-4">
          <h2>Hal hazırda çalışıram</h2>
          <input type="checkbox" onChange={handleCheckboxChange} className="h-5 w-5 rounded border border-gray-300 transition duration-200 ease-in-out" />
        </div>
      </div>

      <div className="flex justify-center pb-3">
        <button onClick={handleSave} className={`px-4 py-2 border border-gray-200 rounded-3xl w-[155px] flex items-center justify-center gap-2 text-base duration-300 ease-in-out hover:bg-slate-400`}>
          Yadda saxla
          <GoCheck />
        </button>
      </div>
    </div>
  );
};

export default Form;
