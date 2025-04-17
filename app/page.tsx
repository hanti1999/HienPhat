import Image from 'next/image';
import img1 from '../assets/Download-app-screenshot_1.jpg';
import img3 from '../assets/Download-app-screenshot_2.jpg';
import img2 from '../assets/Download-app-screenshot_3.jpg';
import DownloadCard from '@/components/download-card';
import img from '../assets/Download-app.jpg';

export default function Home() {
  return (
    <div className='bg-white'>
      <Image src={img} alt='banner' className='aspect-[16/6]' />
      <div className='container mx-auto px-0 lg:px-4'>
        <div className='m-2 p-2 gap-2 flex-col lg:m-10 lg:p-4 lg:gap-10 flex lg:flex-row shadow-lg rounded-lg border border-gray-100'>
          <div>
            <Image src={img1} className='w-[240px] lg:w-[360px]' alt='mall' />
          </div>
          <div className='flex-1 mt-2 lg:mt-0'>
            <h2 className='uppercase font-semibold text-3xl lg:text-4xl'>
              Sản phẩm chính hãng giá tốt
            </h2>
            <p className='text-xl lg:text-2xl mt-2'>
              Sản phẩm chính hãng trong lòng bàn tay, an tâm mua sắm không lo
              hàng giả!
            </p>
            <DownloadCard />
          </div>
        </div>

        <div className='m-2 p-2 gap-2 flex-col-reverse lg:m-10 lg:p-4 lg:gap-10 flex lg:flex-row shadow-lg rounded-lg border border-gray-100'>
          <div className='flex-1 mt-2 lg:mt-0'>
            <h2 className='uppercase font-semibold text-3xl lg:text-4xl'>
              Mua hàng tích điểm
            </h2>
            <p className='text-xl lg:text-2xl mt-2'>
              Thả ga mua sắm không lo về giá với tích điểm trên mỗi đơn hàng!
            </p>
            <DownloadCard />
          </div>
          <div>
            <Image src={img2} className='w-[240px] lg:w-[360px]' alt='points' />
          </div>
        </div>

        <div className='m-2 p-2 gap-2 flex-col lg:m-10 lg:p-4 lg:gap-10 flex lg:flex-row shadow-lg rounded-lg border border-gray-100'>
          <div>
            <Image
              src={img3}
              className='w-[240px] lg:w-[360px]'
              alt='voucher'
            />
          </div>
          <div className='flex-1 mt-2 lg:mt-0'>
            <h2 className='uppercase font-semibold text-3xl lg:text-4xl'>
              Voucher 50.000đ khi tạo tài khoản!
            </h2>
            <p className='text-xl lg:text-2xl mt-2'>
              Nhận ngay 50.000đ khi tham gia tạo tài khoản thành viên tại Gas
              Hiền Phát
            </p>
            <DownloadCard />
          </div>
        </div>
      </div>
    </div>
  );
}
