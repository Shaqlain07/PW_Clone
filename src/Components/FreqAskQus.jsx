import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FreqAskQus = ({ freqAskQus }) => {
  const [isOpen, setIsOpen] = useState(Array(freqAskQus.length).fill(false));

  const toggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div>
      <h4 className='text-3xl text-center my-8 font-semibold text-[#5A4BDA]'>Frequently Asked Questions</h4>
      <div className="w-[90vw] pl-7 flex flex-col gap-4 sm:w-[95vw] mb-6 ">
        {freqAskQus.map((item, index) => (
          <div key={index} className="border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6">
            <h4 className='text-xl font-semibold' onClick={() => toggle(index)}>
              {item.qus} {isOpen[index] ? <MdKeyboardArrowUp className=' float-end hover:cursor-pointer' size={30} /> : <MdKeyboardArrowDown className='hover:cursor-pointer float-end' size={30} />}
            </h4>
            {isOpen[index] ? <p className='mt-3 mr-10'>{item.detail}</p> : ""}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FreqAskQus;
