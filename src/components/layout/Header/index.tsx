/* eslint-disable @next/next/no-img-element */
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-[70px] px-8 flex items-center justify-between bg-[#0f111a]">
      <div className="logo">
        <img src="/logo.svg" alt="logo" className="h-[46px] w-auto" />
      </div>
      <div className="search-bar w-full max-w-[368px] rounded-[6px] overflow-hidden">
        <div className="search-element relative">
          <div className="search-icon absolute top-1/2 left-4 p-[3px] text-white -translate-y-1/2 ">
            <FaSearch />
          </div>
          <div className="search-input h-[2.8rem] leading-[32px] bg-[#ffffff14] px-12 py-[0.4rem] ">
            <input
              type="text"
              placeholder="Tìm kiếm phim, diễn viên"
              className="outline-none bg-transparent text-white "
            />
          </div>
        </div>
      </div>
      <div className="categories">
        <ul className="flex items-center gap-[1rem] justify-between">
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Chủ đề</span>
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer flex items-center gap-2 ">
            <span className="">Thể loại</span>
            <FaCaretDown className="text-white text-10" />
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Phim lẻ</span>
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Phim bộ</span>
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Xem chung</span>
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer flex items-center gap-2 ">
            <span className="">Quốc gia</span>
            <FaCaretDown className="text-white text-10" />
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Diễn viên</span>
          </li>
          <li className="text-white px-3 leading-9 cursor-pointer ">
            <span className="">Lịch chiếu</span>
          </li>
        </ul>
      </div>
      <div className="down-app pr-[1rem] border-r-[1px] border-solid border-[#fff4] ">
        <div className="down-app__element flex items-center px-[1.2rem] gap-[0.75rem] justify-center cursor-pointer ">
          <div className="img-down h-9 w-9 text-[#FFD875]">
            <svg
              id="Pc"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
          <div className="text-down text-white">
            <span className="block text-[12px] text-[#f8f9fa]">
              Tải ứng dụng
            </span>
            <strong className="text-[14px] text-[#ffffff]">Rophim</strong>
          </div>
        </div>
      </div>
      <div className="login flex items-center gap-[1rem] ">
        <div className="notification rounded-[3rem] border-[1px] border-solid border-[#fff] h-10 w-10 flex items-center justify-center cursor-pointer">
          <FaBell className="text-white text-10 " />
        </div>
        <div className="flex items-center px-[0.6rem] py-[0.3rem] gap-[1rem] cursor-pointer">
          <div className="profile rounded-[3rem] border-[2px] border-solid border-[#fff] h-10 w-10 flex items-center justify-center ">
            <img
              src="https://www.rophim.me/images/avatars/pack1/21.jpg"
              alt=""
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
          <div className="down-arrow">
            <FaCaretDown className="text-white text-10 " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
