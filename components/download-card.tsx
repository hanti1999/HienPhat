import React from 'react';
import googlePlay from '@/assets/download-googleplay.png';
import appstore from '@/assets/download-appstore.png';

const DownloadCard = () => {
  return (
    <div className='mt-5 flex items-center lg:gap-5'>
      <a
        target='_blank'
        href='https://play.google.com/store/apps/details?id=com.nthanh99.hienphatgasnow'
      >
        <img src={googlePlay.src} alt='' className='w-[240px]' />
      </a>
      <a
        target='_blank'
        href='https://apps.apple.com/vn/app/hi%E1%BB%81n-ph%C3%A1t/id6744238187?l=vi'
      >
        <img src={appstore.src} alt='' className='w-[240px]' />
      </a>
    </div>
  );
};

export default DownloadCard;
