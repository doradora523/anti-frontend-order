import React, { MouseEventHandler } from 'react';
import { LOGOUT, MYPAGE, ORDER_INQUIRY } from '../../assets/constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const moveToMyOrder: MouseEventHandler<HTMLElement> = () => {
    navigate('/order');
  };
  const moveToMain: MouseEventHandler<HTMLElement> = () => {
    navigate('/');
  };
  return (
    <>
      <div className="fixed top-0 right-1/2 w-[1280px] h-[140px] translate-x-1/2">
        <div className="flex justify-between items-center mt-[40px]">
          <img
            onClick={moveToMain}
            className="cursor-pointer"
            src="https://ecimg.cafe24img.com/pg42b33805115019/antigravity0530/web/upload/fitting_note/logo2.png"
            alt="Fitting Note Logo"
          />
          <ul className="flex space-x-4 text-[#999] text-center justify-end cursor-pointer">
            <li>{LOGOUT}</li>
            <li>{MYPAGE}</li>
            <li onClick={moveToMyOrder}>{ORDER_INQUIRY}</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[140px] right-0 border-b-[1px] border-[rgba(190, 190, 190, 0.7)] w-screen"></div>
    </>
  );
};

export default Header;
