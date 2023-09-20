import Image from 'next/image'
import React from 'react'
import order from './images/order.png'
import Foodimg5 from './images/Foodimg5.png'
import Foodimg6 from './images/Foodimg6.png'
import Foodimg7 from './images/Foodimg7.png'
const ExploreFood = () => {
    return (
        <div>
            <div className='w-[754px] mx-auto text-center mb-[73px]'>
                <h2 className='text-[36px] font-bold'>Explore Our Foods </h2>
                <p className='text-[#555]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <Image src={Foodimg5} alt='Food img' className='mb-[23px]'/>
                    <h3 className='text-[18px] font-bold '>Rainbow Vegetable Sandwich</h3>
                    <p className='text-[#555] mb-[19px]'>Time: 15 - 20 Minutes | Serves: 1</p>
                    <p className='text-[24px] font-normal text-[#024D94] mb-[25px]'><span className='text-[#F46A06]'>$10.50 </span><del> $11.70 </del></p>
                    <hr className='h-[1px]  bg-[#55555526] border-none mb-[20px]'/>
                    <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Order Now <Image src={order} alt='Order icon' /></button>
                </div>
                <div>
                    <Image src={Foodimg6} alt='Food img' className='mb-[23px]'/>
                    <h3 className='text-[18px] font-bold '>Rainbow Vegetable Sandwich</h3>
                    <p className='text-[#555] mb-[19px]'>Time: 15 - 20 Minutes | Serves: 1</p>
                    <p className='text-[24px] font-normal text-[#024D94] mb-[25px]'><span className='text-[#F46A06]'>$9.20 </span><del> $11.70 </del></p>
                    <hr className='h-[1px]  bg-[#55555526] border-none mb-[20px]'/>
                    <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Order Now <Image src={order} alt='Order icon' /></button>
                </div>
                <div>
                    <Image src={Foodimg7} alt='Food img' className='mb-[23px]'/>
                    <h3 className='text-[18px] font-bold '>Rainbow Vegetable Sandwich</h3>
                    <p className='text-[#555] mb-[19px]'>Time: 15 - 20 Minutes | Serves: 1</p>
                    <p className='text-[24px] font-normal text-[#024D94] mb-[25px]'><span className='text-[#F46A06]'>$12.50 </span><del> $15.70 </del></p>
                    <hr className='h-[1px]  bg-[#55555526] border-none mb-[20px]'/>
                    <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Order Now <Image src={order} alt='Order icon' /></button>
                </div>
            </div>
        </div>
    )
}

export default ExploreFood