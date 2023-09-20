import siteLogo from './images/siteLogo.png'

import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='max-w-[1230px] mx-auto flex items-center justify-between px-3 py-[24px]'>
        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>
            <Image src={siteLogo} alt='site logo'/>
        </Link>
        <div className='flex items-center gap-[54px]'>
            <nav>
                <ul className='flex gap-[23px] text-[#F46A06] text-[15px] font-medium'>
                    <li>
                        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>About Us</Link>
                    </li>
                    <li>
                        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>Explore Foods</Link>
                    </li>
                    <li>
                        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>Reviews</Link>
                    </li>
                    <li>
                        <Link className='hover:opacity-70 active:opacity-60' href={'/'}>FAQ</Link>
                    </li>
                </ul>
            </nav>
            <button className='py-[10px] px-[24px] bg-[#F46A06] text-white hover:opacity-70 active:opacity-60'>1800 789 123</button>
        </div>
    </div>
  )
}

export default Navbar