import axios from 'axios';
import Image from 'next/image';
import order from '../components/images/order.png'
import Arrow from '../components/images/vectorArrov.svg'
import Hero from '../components/images/Hero.png'
import Foods from '@/components/foods';

async function GetData() {
  const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '579de46de1msh0a167fffbb4bd68p1a21aejsn24084b936f1c',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    return response.json()
  } catch (error) {
    return error
  }
}

export default async function Home() {
  const {hints} = await GetData()

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
      <ol className='w-full bg-[#F46A06] flex gap-[180px] justify-center py-[47px] text-[40px] font-bold text-white text-center'>
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
      <div>
        <Foods data={hints} />
      </div>
    </div>
  )
}