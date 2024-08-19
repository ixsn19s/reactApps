import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] w-full py-8 flex justify-center text-zinc-500  font-bold text-2xl '>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-700'>Docs.</h1>
    </div>
    </>
  )
}

export default Background;