import { useState } from "react";
import LineProgresBar from "./LineProgresBar";
import Calendar from "./Calendar";
import RadioButton from './RadioButton';

const Form = () => {
  const [selectedLaborSkill, setSelectedLaborSkill] = useState("");
  const [selectedProfessionalism, setSelectedProfessionalism] = useState("");
  const [showLaborSkillList, setShowLaborSkillList] = useState(false);
  const [showProfessionalismList, setShowProfessionalismList] = useState(false);

  const [enterpriseData, setEnterpriseData] = useState('');
  const [dutyData, setDutyData] = useState('');
  // const [employeeData,setEmployeeData]=useState('')


  const handleLaborSkillItemClick = (item) => {
    setSelectedLaborSkill(item);
    setShowLaborSkillList(false);
  };
  const handleProfessionalismItemClick = (item) => {
    setSelectedProfessionalism(item);
    setShowProfessionalismList(false);
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
  const handleEnterpriseChange = (event) => {
    setEnterpriseData(event.target.value);
  };
  const handleDutyChange = (event) => {
    setDutyData(event.target.value);
  };
  console.log(enterpriseData)
  console.log(dutyData)
  
  return (
    <div className="bg-white p-10 pb-1 rounded-xl w-[575px] h-[616px]">
      <h2 className="text-emerald-900 text-xl w-fit ml-2 mb-[18px]">İş təcrübəsi</h2>
      <LineProgresBar />
      <h3 className="w-fit ml-2"> İş təcrübəniz var? </h3>
      <div className="mt-[26px]">
      <RadioButton confirmation='Bəli' denial='Xeyr'/>
      </div>
      <div>

        <div className="mt-[25px]">
          <h3 className="text-lg ml-2">Çalışdığınız müəssisənin adını qeyd edin.*;</h3>
          <input onChange={handleEnterpriseChange} value={enterpriseData} required type="text" className="w-[490px] border  bg-gray-200 focus:outline-none px-3 rounded-lg"/>
        </div>
        <div className="mt-[15px]">
          <h3 className="text-lg ml-2">Vəzifənizi qeyd edin.*;</h3>
          <input onChange={handleDutyChange} value={dutyData} required  type="text" className="w-[490px] border  bg-gray-200 focus:outline-none px-3 rounded-lg"/>
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
            <Calendar />
          </div>
          <div>
            <h2 className="ml-2 mt-[10px]">İşdən ayrılma tarixi:</h2>
            <Calendar />
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 my-4">
          <h2>Hal hazırda çalışıram</h2>
          <input type="checkbox" className="h-5 w-5 rounded border border-gray-300 transition duration-200 ease-in-out" />
        </div>
      </div>

      <div className="flex justify-center pb-3">
        <button className={`px-4 py-2 border border-gray-200 rounded-3xl w-[155px] flex items-center justify-center gap-2  text-base duration-300 ease-in-out hover:bg-slate-400  `}>
          Yadda saxla
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.50001 13.5L4.58334 10.5834C4.50707 10.5062 4.41624 10.4449 4.3161 10.4031C4.21597 10.3612 4.10853 10.3397 4.00001 10.3397C3.89149 10.3397 3.78404 10.3612 3.68391 10.4031C3.58378 10.4449 3.49294 10.5062 3.41667 10.5834C3.33947 10.6596 3.27818 10.7505 3.23635 10.8506C3.19451 10.9508 3.17297 11.0582 3.17297 11.1667C3.17297 11.2752 3.19451 11.3827 3.23635 11.4828C3.27818 11.5829 3.33947 11.6738 3.41667 11.75L6.90834 15.2417C7.23334 15.5667 7.75834 15.5667 8.08334 15.2417L16.9167 6.41671C16.9939 6.34044 17.0552 6.24961 17.097 6.14948C17.1388 6.04934 17.1604 5.9419 17.1604 5.83338C17.1604 5.72486 17.1388 5.61742 17.097 5.51728C17.0552 5.41715 16.9939 5.32632 16.9167 5.25005C16.8404 5.17285 16.7496 5.11155 16.6494 5.06972C16.5493 5.02789 16.4419 5.00635 16.3333 5.00635C16.2248 5.00635 16.1174 5.02789 16.0172 5.06972C15.9171 5.11155 15.8263 5.17285 15.75 5.25005L7.50001 13.5Z" fill="#444444" />
          </svg>
        </button>
      </div>
      
    </div>
  );
};

export default Form;
