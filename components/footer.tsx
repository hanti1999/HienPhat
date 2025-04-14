import Link from 'next/link';
import React from 'react';
import cLogo from '@/assets/logoHp.png';
import fLogo from '@/assets/Facebook.png';
import zLogo from '@/assets/zaloLogo.png';
import dAppStore from '@/assets/download-appstore.png';
import dGoogle from '@/assets/download-googleplay.png';

const footerLinks = [
  {
    text: 'Giới thiệu về công ty',
    href: '/about',
    target: '',
  },
  {
    text: 'Chính sách bảo mật',
    href: '/privacy',
    target: '',
  },
  {
    text: 'Liên hệ',
    href: '/contact',
    target: '',
  },
  {
    text: 'Tìm cửa hàng',
    href: 'https://goo.gl/maps/yYy447eNamPJ1FYE9',
    target: '_blank',
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#f5f5f5] border-t-4 border-primary mt-5'>
      <div className='footer bg-[#f8f9fa] pb-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[24px] mx-2 md:mx-6'>
          <div className='col-span-1 '>
            <div className='mt-5'>
              <Link href='/' className='mb-5 block w-[60px]'>
                <img src={cLogo.src} alt='' className='w-full' />
              </Link>
              <span className='block my-2.5'>
                Địa chỉ: 199, Quốc Lộ 51, ấp 7, xã An Phước, huyện Long Thành,
                tỉnh Đồng Nai{' '}
                <a
                  className='cursor-pointer underline text-blue-500'
                  href='https://goo.gl/maps/yYy447eNamPJ1FYE9'
                  target='_blank'
                >
                  (xem trên Google Map)
                </a>
              </span>
              <span className='block my-2.5'>
                Điện thoại:{' '}
                <a className='text-primary' href='tel:02513511610'>
                  <b>02513 511 610</b>
                </a>
              </span>
              <span className='block my-2.5'>
                Di động:{' '}
                <a className='text-primary' href='tel:0986573072'>
                  <b>0986 573 072</b>
                </a>
              </span>
              <span className='block my-2.5'>
                Email:{' '}
                <a
                  className='text-primary'
                  target='_blank'
                  href='mailto:gashienphat1979@gmail.com'
                >
                  gashienphat1979@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className='col-span-1 '>
            <ul className='mt-5'>
              <h4 className='font-bold mb-4'>Truy cập nhanh:</h4>
              {footerLinks.map((items, index) => (
                <li key={index} className='block mb-2.5'>
                  <a
                    className='text-primary'
                    target={items.target}
                    href={items.href}
                  >
                    {items.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-1 '>
            <div className='mt-5'>
              <h4 className='font-bold'>Theo dõi chúng tôi tại:</h4>
              <a
                className='inline-block'
                target='_blank'
                href='https://www.facebook.com/hienphatvina'
              >
                <img
                  className='w-[30px] mt-2.5 mr-2.5 mb-5'
                  src={fLogo.src}
                  alt=''
                />
              </a>
              <a
                className='inline-block'
                target='_blank'
                href='https://zalo.me/0975841582'
              >
                <img
                  className='w-[30px] mt-2.5 mr-2.5 mb-5'
                  src={zLogo.src}
                  alt=''
                />
              </a>
              <h4 className='font-bold'>Tải ứng dụng</h4>
              <a
                className='inline-block'
                target='_blank'
                href='https://apps.apple.com/vn/app/hi%E1%BB%81n-ph%C3%A1t/id6744238187?l=vi'
              >
                <img
                  className='w-[120px] mt-2.5 mr-2.5 mb-5'
                  src={dAppStore.src}
                  alt=''
                />
              </a>
              <a
                className='inline-block'
                target='_blank'
                href='https://apps.apple.com/vn/app/hi%E1%BB%81n-ph%C3%A1t/id6744238187?l=vi'
              >
                <img
                  className='w-[120px] mt-2.5 mr-2.5 mb-5'
                  src={dGoogle.src}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[6px] pb-2.5'>
        <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>
          Công ty TNHH Hiền Phát Vina
        </div>
        <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>
          Mã số doanh nghiệp: 3603240938 do Sở Kế hoạch & Đầu tư tỉnh Đồng Nai
          cấp lần đầu ngày 30/12/2014
        </div>
        <div className='w-full text-center text-14 mt-[4px] text-[#00000099]'>
          Web thử nghiệm bởi: <b>Nguyễn Thông Hoàng Anh</b>
          {/* <a target='_blank' href='https://www.instagram.com/hoangfanh.99/'>
            <i className='text-16 px-[3px] fa-brands fa-instagram'></i>
          </a>
          <a target='_blank' href='https://www.facebook.com/hoangfanh.99/'>
            <i className='text-16 px-[3px] fa-brands fa-facebook'></i>
          </a>
          <a target='_blank' href='https://zalo.me/0986359498'>
            <i className='text-16 px-[3px] fa-solid fa-phone'></i>
          </a>
          <a target='_blank' href='mailto:nth.anh020209@gmail.com'>
            <i className='text-16 px-[3px] fa-solid fa-envelope'></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
