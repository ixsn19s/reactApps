import React, { useRef } from 'react';
import Cards from './Cards';

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "white" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-6 p-5 flex-wrap'>
      {data.map((item, index) => (
        <Cards key={index} data={item} reference={ref} /> 
      ))}
    </div>
  );
}

export default Foreground;
