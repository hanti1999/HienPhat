import React from 'react';

const Privacy = () => {
  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6 text-center'>
          Chính sách bảo mật
        </h1>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          1. Thông tin chúng tôi thu thập:
        </h2>
        <p className='text-gray-700 mb-2'>
          Thông tin cá nhân: Tên, số điện thoại, địa chỉ giao hàng.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          2. Mục đích thu thập thông tin:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Xử lý đơn hàng và giao hàng.
          <br />- Cung cấp dịch vụ hỗ trợ khách hàng.
          <br />- Gửi thông tin khuyến mãi và cập nhật sản phẩm.
          <br />- Cải thiện trải nghiệm người dùng.
          <br />- Phân tích xu hướng thị trường.
          <br />- Tuân thủ quy định pháp luật.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          3. Cách thức thu thập và lưu trữ thông tin:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Thu thập thông tin khi người dùng đăng ký tài khoản, đặt hàng hoặc
          liên hệ với chúng tôi.
          <br />- Lưu trữ thông tin trên máy chủ an toàn với các biện pháp bảo
          mật phù hợp.
          <br />- Sử dụng các phương thức mã hóa dữ liệu.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          4. Việc chia sẻ thông tin với bên thứ ba:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Chia sẻ thông tin với các đối tác vận chuyển để giao hàng.
          <br />- Không chia sẻ thông tin cá nhân với bên thứ ba cho mục đích
          tiếp thị mà không có sự đồng ý của người dùng.
          <br />- Tuân thủ theo yêu cầu của cơ quan pháp luật có thẩm quyền.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          5. Quyền của người dùng:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Người dùng có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân
          của mình.
          <br />- Người dùng có quyền từ chối nhận thông tin khuyến mãi.
          <br />- Người dùng có quyền khiếu nại về việc xử lý thông tin cá nhân.
          <br />- Liên hệ với chúng tôi qua thông tin liên hệ được cung cấp ở
          phần cuối của chính sách này.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          6. Thay đổi chính sách bảo mật:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Chúng tôi có quyền thay đổi chính sách bảo mật này vào bất kỳ lúc
          nào.
          <br />- Chúng tôi sẽ thông báo cho người dùng về những thay đổi quan
          trọng.
          <br />- Người sử dụng có trách nhiệm thường xuyên xem lại chính sách
          này để cập nhật các thay đổi.
        </p>
        <h2 className='text-xl text-gray-700 font-bold leading-relaxed mb-2'>
          7. Thông tin liên hệ:
        </h2>
        <p className='text-gray-700 mb-2'>
          - Tên công ty: CÔNG TY TNHH HIỀN PHÁT VI NA.
          <br />- Địa chỉ: Quốc lộ 51, khu 2, ấp 7, Xã An Phước, Huyện Long
          Thành, Tỉnh Đồng Nai, Việt Nam.
          <br />- Email: gashienphat1979@gmail.com
          <br />- Số điện thoại:{' '}
          <a className='underline text-blue-500' href={'tel: 0965266926'}>
            0965 266926
          </a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
