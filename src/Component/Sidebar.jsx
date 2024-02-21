import { useState } from "react";

const Sidebar = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Təhsil",
    },
    {
      id: 2,
      title: "Dil Bilikləri",
    },
    {
      id: 3,
      title: "Bacarıqlar",
    },
    {
      id: 4,
      title: "İdman",
    },
    {
      id: 5,
      title: "İş təcrübəsi",
    },
    {
      id: 6,
      title: "Program",
    },
  ];

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  return (
    <div className=" pt-14">
      <ul className="flex flex-col items-end">
        {data?.map((item) => (
          <li
            key={item.id}
            className={`pl-3 my-2  pr- rounded-l-xl  ${selectedItemId === item.id ? "bg-sky-800 w-[170px] h-[30px]" : "bg-gray-200 w-[136px]"}`}
            onClick={() => handleItemClick(item.id)}
          >
            {selectedItemId === item.id && <span className="mr- ">{item.id}</span>} <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
