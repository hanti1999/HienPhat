'use client';
import { useState } from 'react';
import axios from 'axios';

const DeleteAccount = () => {
  const [phone, setPhone] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      const url = 'https://hpgasnow.io.vn/business/api/v2';
      const res = await axios.delete(`${url}/account/delete-account/${phone}`);
      if (res.status === 200) {
        setResult('Đã xóa thành công!');
      }
    } catch (error) {
      console.error('Lỗi xóa tài khoản!');
      setResult('Xóa không thành công!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6 text-center'>
          Yêu cầu xóa tài khoản
        </h1>
        {result ? (
          <p>{result}</p>
        ) : (
          <>
            <p>Nhập tài khoản (số điện thoại)</p>
            <input
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Nhập số điện thoại'
              type='number'
              className='border rounded-lg p-2 my-2'
            />
            <br />
            <button
              disabled={phone.length !== 10 || loading}
              onClick={handleDeleteAccount}
              className={`${
                phone.length !== 10
                  ? 'bg-[rgba(0,0,0,0.04)] border-[#d9d9d9] border cursor-not-allowed'
                  : 'bg-[#fb77c5] border-[#fb77c5] border cursor-pointer hover:opacity-80 transition-all'
              } w-[80px] p-2 rounded-lg`}
            >
              <p
                className={`${
                  phone.length !== 10 ? 'text-[rgba(0,0,0,0.25)]' : 'text-white'
                }`}
              >
                Xóa
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteAccount;
