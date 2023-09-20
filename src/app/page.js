import axios from 'axios';
import Image from 'next/image';
import order from '../components/images/order.png'
import Arrow from '../components/images/vectorArrov.svg'
import Hero from '../components/images/Hero.png'
import Foods from '@/components/foods';
import play from '../components/images/play.svg'
import ExploreFood from '@/components/exploreFood';
import FaceBook from '../components/images/FaceBook.png'
import Twitter from '../components/images/Twitter.png'
import Instagram from '../components/images/Instagram.png'

import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <header className='max-w-[1230px] mx-auto px-3 pt-[66px] pb-[46px]'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-[48px] font-bold mb-[26px] leading-[50px]'>Order food from <br /> favourite restaurants <br /> near you.</h1>
            <div className='w-[429px] mb-[28px]'>
              <p className='text-[#555]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
            </div>
            <div className='flex gap-[23px]'>
              <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Order Now <Image src={order} alt='Order icon' /></button>
              <button className='py-[10px] px-[24px] bg-[#fff] text-[#000] shadow-xl font-bold flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Learn More <Image src={Arrow} alt='Arrow icon' /></button>
            </div>
          </div>
          <Image src={Hero} alt='Hero img' />
        </div>
      </header>
      <ol className='w-full bg-[#F46A06] flex gap-[180px] justify-center py-[47px] text-[40px] font-bold text-white text-center mb-[137px]'>
        <li>
          <h3>1287+</h3>
          <p className='text-[14px]'>Savings</p>
        </li>
        <li>
          <h3>5786+</h3>
          <p className='text-[14px]'>Savings</p>
        </li>
        <li>
          <h3>1440+</h3>
          <p className='text-[14px]'>Savings</p>
        </li>
        <li>
          <h3>7110+</h3>
          <p className='text-[14px]'>Savings</p>
        </li>
      </ol>
      <div className='max-w-[1230px] mx-auto px-3 pb-[108px]'>
        <Foods />
      </div>
      <div className='w-full bg-cover mx-auto h-[402px] bg-[url(../components/images/Foodimg3.png)] bg-no-repeat flex justify-center items-center mb-[88px]'>
        <div className='max-w-[717px] text-center'>
          <h2 className='text-[36px] font-bold text-[#F46A06]'>When a mans stomach is full it makes no
            difference whether he is rich or poor.</h2>
          <p className='text-[#fff] mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <button className='w-full justify-center text-[#fff] flex gap-[8px] items-center'><Image src={play} alt='Play icon'/> Watch Our Story</button>
        </div>
      </div>
      <div className='max-w-[1230px] mx-auto px-3 pb-[108px]'>
        <ExploreFood />
      </div>
      <div className='w-full bg-[#1F1C1C] py-[69px] mb-[75px]'>
        <div className='max-w-[978px] mx-auto flex justify-between'>
          <h2 className='text-[28px] font-bold text-white'>Baked fresh daily by bakers with passion.</h2>
          <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60'>Learn More</button>
        </div>
      </div>
      <div className='max-w-[1230px] mx-auto px-3 mb-[74px]'>
        <div className='w-[604px] text-center mx-auto'>
          <h2 className='text-[36px] font-bold'>Hurry up! Subscribe our newsletter and get 25% Off</h2>
          <p className='mb-[14px]'>Limited time offer for this month. No credit card required.</p>
          <form className='flex gap-[23px]'>
            <label >
              <span hidden>Email</span>
            </label>
            <input type="email" className='w-[400px] border-[3px] boder-[#E5E5E5] h-[50px] pl-[17px] text-[#555555B2]' placeholder='Email Address Here' />
            <button className='py-[10px] px-[24px] bg-[#F46A06] text-white flex items-center gap-[6px] hover:opacity-70 active:opacity-60' type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='w-full flex justify-center bg-[#F46A06] py-[78px]'>
        <div className='text-white'>
          <nav className='mb-[33px]'>
            <ol className=' text-[15px] flex gap-[27px]'>
              <li>
                <Link href={'/'} className='hover:opacity-70 active:opacity-60'>Register</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:opacity-70 active:opacity-60'>Forum</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:opacity-70 active:opacity-60'>Affiliate</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:opacity-70 active:opacity-60'>FAQ</Link>
              </li>
            </ol>
          </nav>
          <div className='flex gap-[22px] justify-center mb-[27px]'>
            <button className='hover:opacity-70 active:opacity-60'><Image src={FaceBook} alt='FaceBook icon'/></button>
            <button className='hover:opacity-70 active:opacity-60'><Image src={Twitter} alt='Twitter icon'/></button>
            <button className='hover:opacity-70 active:opacity-60'><Image src={Instagram} alt='Instagram icon'/></button>
          </div>
          <p>© 2021. FoodDX. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}