import React from 'react';

const PageAbout = () => {
  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6 text-center'>
          Giới thiệu về chúng tôi
        </h1>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          Về chúng tôi:
        </h2>
        <p>
          Gas Hiền Phát chúng tôi chuyên cung cấp các sản phẩm gas và dịch vụ
          ngành gas bao gồm: gas dân dụng, gas công nghiệp, bếp gas dân dụng,
          bếp gas công nghiệp, điện gia dụng, bếp điện từ, bếp hồng ngoại,...
          các sản phẩm chính hãng, chất lượng cao, đa dạng mức giá và khuyến mãi
          cho khách hàng.
        </p>
        <br />
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.0147714948725!2d106.93191752156832!3d10.839831864213505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31751f94f051178d%3A0x638be8afacce1a95!2sCTY%20TNHH%20GAS%20Hi%E1%BB%81n%20Ph%C3%A1t%20Vina!5e0!3m2!1svi!2s!4v1743128758755!5m2!1svi!2s'
          width='100%'
          height='450'
          className='border-0 rounded-lg'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default PageAbout;
