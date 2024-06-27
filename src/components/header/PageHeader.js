import { Link } from "react-router-dom";
import AlignIcon from "../../icons/AlignIcon";
import CloseIcon from "../../icons/CloseIcon";
import LocationIcon from "../../icons/LocationIcon";
import Logo from "../../icons/Logo";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import { useState } from "react";

function PageHeader() {
  const [visible, setVisible] = useState(false);

  const headerValue = {
    location: "HaNoi",
    emailAddress: "duongdd@gmail.com",
    phoneNumber: "0369901275",
    home: "Trang chủ",
    product: "Sản phẩm",
    cart: "Giỏ hàng",
    account: "Tài khoản"
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="bg-white flex justify-start w-full min-h-[24px]">
        <div className="flex items-center px-[10px]">
          <LocationIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.location}
          </div>
        </div>
        <div className="flex items-center px-[10px]">
          <MailIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.emailAddress}
          </div>
        </div>
        <div className="flex items-center px-[10px]">
          <PhoneIcon />
          <div className="text-[#C7C3C3] ml-[4px] font-bold lg:text-[16px] text-[12px]">
            {headerValue.phoneNumber}
          </div>
        </div>
      </div>
      <hr />
      <div
        className={`min-h-[80px] bg-white w-full flex justify-center items-center ${
          visible ? "" : "shadow-xl"
        }`}
      >
        <div className="w-full flex items-center justify-between max-w-[1248px]">
          <Link className="cursor-pointer ml-[10px] hover:scale-105 transition-all" to="/">
            <Logo />
          </Link>
          <div className="lg:flex justify-between w-[40%] items-center hidden">
            <Link className="font-bold text-[#FD3939] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all" to="/">
              {headerValue.home}
            </Link>
            <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all">
              {headerValue.product}
            </div>
            <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans hover:scale-105 transition-all">
              {headerValue.cart}
            </div>
            <div className="hover:scale-105 transition-all">
              <ProfileIcon />
            </div>
          </div>
          <div className="lg:hidden flex transition-all mr-[10px]" onClick={() => setVisible(!visible)}>
            {visible ? <CloseIcon /> : <AlignIcon />}
          </div>
        </div>
      </div>
      <div
        className={`transition-all ${
          visible ? "" : "hidden"
        } shadow-xl pb-[10px] w-full bg-white`}
      >
        <div className="w-full flex items-center justify-end">
          <Link className="font-bold text-[#FD3939] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]" to="/">
            {headerValue.home}
          </Link>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]">
            {headerValue.product}
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]">
            {headerValue.cart}
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]">
            {headerValue.account}
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]">
            
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="font-bold text-[#FCA4A4] text-[20px] hover:text-[#FD3939] cursor-pointer font-sans py-[4px] pr-[40px]">
            Đăng xuất
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
