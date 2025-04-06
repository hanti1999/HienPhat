import React from 'react';

const Contact = () => {
  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6 text-center'>
          Thông tin liên hệ
        </h1>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          CÔNG TY TNHH HIỀN PHÁT VI NA
        </h2>
        <p>Trụ sở: Quốc lộ 51, Ấp 7, Xã An Phước, Huyện Long Thành, Đồng Nai</p>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số: 3603240938 do Sở Kế Hoạch và
          Đầu Tư tỉnh Đồng Nai cấp lần đầu ngày 30/12/2014
        </p>
        <a
          className='text-blue-500 underline'
          target='_blank'
          href='https://maps.app.goo.gl/bqKBHGdVWSq1KJn4A'
        >
          (Mở bản đồ)
        </a>
        <br />
        <p>Thông tin liên hệ:</p>
        <a
          className='text-blue-500 underline'
          href='mailto:gashienphat1979@gmail.com'
        >
          Email: gashienphat1979@gmail.com
        </a>
        <br />
        <a className='text-blue-500 underline' href='tel:0975841582'>
          0975 841 582 (Zalo)
        </a>
        <br />
        <a className='text-blue-500 underline' href='tel:0986573072'>
          0986 573 072 (Zalo)
        </a>
      </div>
    </div>
  );
};

export default Contact;
