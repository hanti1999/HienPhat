'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logoHp.png';

const Navbar = () => {
  const NAV_LINKS = [
    {
      href: '/',
      label: 'Trang chủ',
    },
    {
      href: '/about',
      label: 'Về chúng tôi',
    },
    {
      href: '/privacy',
      label: 'Chính sách bảo mật',
    },
    {
      href: '/contact',
      label: 'Liên hệ',
    },
  ];

  return (
    <header className='w-full px-8 text-gray-700 bg-white shadow-sm'>
      <div className='container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl'>
        <div className='flex flex-col md:flex-row items-center'>
          <Link href={'/'} className='flex items-center mb-5 md:mb-0 gap-1'>
            <Image src={Logo} alt='logo' className='w-10 h-10' />
            <span className='text-xl font-bold text-red-700 select-none'>
              Hiền Phát
            </span>
          </Link>
          <nav className='hidden md:flex md:flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8'>
            {NAV_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='mr-5 font-medium text-gray-600 hover:text-gray-900'
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
