import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Cards = ({ data, reference }) => {
  // Mapping tagColor to Tailwind classes
  const tagColorClass = {
    green: "bg-green-600",
    blue: "bg-blue-600",
    white: "bg-white text-black", // Added white case with text color change
    // Add other colors as needed
  }[data.tag.tagColor] || "bg-gray-600"; // Fallback to gray if color not found

  return (
    <motion.div 
    // dragConstraints={{ left: -100, right: 100 }}
      dragConstraints={reference} 
      animate="hidden"
      whileHover={{ scale: 1.1 }}
      // drag="x"
      drag
     
      className='relative flex-shrink-0 w-[200px] h-[250px] rounded-[40px] bg-zinc-700/60 text-white p-5 overflow-hidden'
    >
      <FaRegFileAlt />
      <p className='leading-tight mt-3 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='relative text-white flex bottom-5 items-center justify-between px-3'>
          <h4 className='text-sm font-semibold'>{data.fileSize}</h4>
          <span className='w-5 h-5 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose size="2em" /> : <MdDownloadForOffline size="2em" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`w-full py-4 flex items-center justify-center ${tagColorClass}`}>
            <h2 className='font-bold'>{data.tag.tagTitle}</h2>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
