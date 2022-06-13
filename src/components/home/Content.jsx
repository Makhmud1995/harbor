import React from 'react'
import Apple from '../../assets/apple.svg'
import Play from '../../assets/play.svg'

const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#F9F7F4]'>
      <div className='text-[48px] font-bold text-[#28514F] font-sans'>Reimagining readiness for<br/>life's uncertain moments.</div>
      <div className='text-[21px] font-normal text-[#28514F] font-sans'>The app that makes disaster preparedness easy and accessible.<br/>   Because sometimes tomorrow doesn't look like today.</div>
      <div className='flex  '>
        <button className='rounded-full flex  justify-evenly items-center  text-[white] w-[156px] h-[56px] mr-4 bg-[#28514F]'><img src={Apple} alt=''></img>App Store</button>
        <button className='rounded-full flex  justify-evenly items-center  text-[white]  w-[156px] h-[56px] bg-[#28514F]'><img src={Play} alt=''></img>Play Store</button>
      </div>
    </div>
  )
}

export default Content