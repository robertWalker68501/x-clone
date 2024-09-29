import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 p-3'>
      <Link href='/'>
        <FaXTwitter className='size-16 cursor-pointer rounded-full p-3 transition-all duration-200 hover:bg-gray-100' />
      </Link>

      <Link
        href='/'
        className='flex w-fit items-center gap-2 rounded-full p-3 transition-all duration-200 hover:bg-gray-100'
      >
        <HiHome className='size-7 cursor-pointer' />
        <span className='hidden font-bold xl:inline'>Home</span>
      </Link>

      <button className='hidden h-9 w-48 rounded-full bg-blue-400 text-white shadow-md transition-all duration-200 hover:brightness-95 xl:inline'>
        Sign In
      </button>
    </div>
  );
};

export default Sidebar;
