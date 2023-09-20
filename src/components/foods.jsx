"use client"
import Arrow from './images/vectorArrovWhite.svg'
import Image from "next/image"
import Foodimg1 from './images/Foodimg1.png'
import Foodimg2 from './images/Foodimg2.png'
import Foodimg3 from './images/Foodimg3.png'
import Foodimg5 from './images/Foodimg5.png'
import Foodimg6 from './images/Foodimg6.png'
import Foodimg7 from './images/Foodimg7.png'
import check from './images/check.svg'

const Foods = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-[117px]'>
        <Image src={Foodimg1} alt="Food img"/>
        <div className='max-w-[429px]'>
          <h2 className='text-[32px] font-bold mb-[20px]'>We pride ourselves on making real food from the best ingredients.</h2>
          <p className='mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
          <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Learn More <Image src={Arrow} alt='Arrow icon' /></button>
        </div>
      </div>
      <div className='flex flex-row-reverse justify-between items-center'>
        <Image src={Foodimg2} alt="Food img"/>
        <div className='max-w-[429px]'>
          <h2 className='text-[32px] font-bold mb-[20px]'>We pride ourselves on making real food from the best ingredients.</h2>
          <p className='mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
          <ol className='flex flex-col gap-[13px] mb-[32px]'>
            <li className='flex gap-[16px]'>
              <Image src={check} alt='cheack icon'/>
              <p>Etiam sed dolor ac diam volutpat.</p>
            </li>
            <li className='flex gap-[16px]'>
              <Image src={check} alt='cheack icon'/>
              <p>Etiam sed dolor ac diam volutpat.</p>
            </li>
            <li className='flex gap-[16px]'>
              <Image src={check} alt='cheack icon'/>
              <p>Etiam sed dolor ac diam volutpat.</p>
            </li>
          </ol>
          <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Learn More <Image src={Arrow} alt='Arrow icon' /></button>
        </div>
      </div>
    </div>
  )
}

export default Foods