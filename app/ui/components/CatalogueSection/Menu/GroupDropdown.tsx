import { useState } from "react";

export const GroupDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
      >
        Открыть список
      </button>
      {isOpen && (
        <div className=" mt-2 w-48 bg-white shadow-lg rounded-md">
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
            Кнопка 1
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
            Кнопка 2
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
            Кнопка 3
          </button>
        </div>
      )}
    </div>
  );
};
