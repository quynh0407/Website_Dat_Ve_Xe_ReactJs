import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid';

import '../../../styles/client/scss/pages/home.scss';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <header className="p-0 pb-2 mb-3 h-auto" >
                <div className="menu fixed top-0 left-0 w-full z-50" id="menu">
                    <div className="menu-top flex justify-between w-[80%] lg:w-[80%] mx-auto items-center py-4">
                        <Link to="/" className="menu-top-left font-bold text-2xl">
                            <img src="/assets/images/main/logo.png" alt className="w-1/2 lg:w-[150px] md:w-[100px] " />
                        </Link>
                        <div className="menu-top-right flex p-2">
                            <ul className="flex flex-row flex-nowrap gap-4 justify-between list-none items-center text-base md:text-[1rem] lg:text-[1rem]">
                                <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md whitespace-nowrap">
                                    <Link to="#">Hỗ trợ</Link>
                                </li>
                                <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md whitespace-nowrap">
                                    <Link to="/lich-su-dat-ve">Đặt chỗ của tôi</Link>
                                </li>
                                <li className="border border-white rounded-lg px-4 py-2 hover:bg-black/10 whitespace-nowrap">
                                    <Link to="/dang-ky" className="no-underline">
                                        <i className="fas fa-user mr-2"></i> Đăng ký
                                    </Link>
                                </li>
                                <li className="rounded-lg px-4 py-2 bg-sky-500 hover:text-white transition duration-300 font-bold hover:bg-sky-600/50 whitespace-nowrap">
                                    <Link to="/dang-nhap" className="no-underline">Đăng nhập</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr className="border-gray-500 opacity-50" />
                    <div className="menu-bottom flex justify-start w-[80%] lg:w-[80%] mx-auto items-center py-1">
                        <ul className="flex flex-wrap gap-4 justify-center md:justify-start list-none items-center font-bold">
                            <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                              <Link to="/">Trang chủ</Link>
                            </li>
                           
                            <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                            <Link to="/tra-cuu-ve">Đặt vé xe</Link> </li>
                           
                            <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                            <Link href="./bus.html"> Lịch trình</Link></li>
                            <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                             <Link to="tin-tuc">Tin tức</Link> </li>
                            <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                            <Link to="lien-he"> Liên hệ</Link>
                           </li>
                             <li className="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">
                            <Link to="ve-chung-toi">Về chúng tôi</Link> </li>
                        </ul>
                    </div>
                    <hr className="border-gray-500 opacity-50" />
                </div>

                <div id="mobileMenu" className=" w-full z-50 bg-[#043175] text-white ">
                    <div className="menu-top flex justify-between w-[90%] mx-auto items-center py-4">
                        <button type="submit" className="hamburger material-icons" id="ham-main">menu</button>

                        <Link to="/" className="menu-top-left font-bold w-[14%] ">
                            <img src="/assets/images/main/logo.png" alt="Logo" className=" w-[100%]" />
                        </Link>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-white bg-blue-700 hover:bg-blue-800 p-[0.5] rounded-full"
                            >
                                <UserCircleIcon className="w-8 h-8" />
                            </button>

                            <div
                                id="dropdown"
                                className={`${dropdownOpen ? 'block' : 'hidden'
                                    } absolute top-15 right-0 z-[1000] bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                            >
                                <ul className="py-2 text-sm text-gray-700">
                                    <li>
                                        <a href="#" className="flex items-center gap-3 block px-3 py-2 hover:bg-gray-100">
                                            <img
                                                src="/assets/images/logos/user.png"
                                                alt="User avatar"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span className="text-sm text-sky-900 font-medium">Trang cá nhân</span>
                                        </a>

                                    </li>
                                    <li>
                                        <Link to="/lich-su-dat-ve" className="flex items-center gap-3 block px-3 py-2 hover:bg-gray-100">
                                            <img
                                                src="/assets/images/logos/clock.png"
                                                alt="User avatar"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span className="text-sm text-sky-900 font-medium">Lịch sử đặt vé</span>
                                        </Link>
                                    </li>                 
                                    <li>
                                        <a href="#" className="flex items-center gap-3 block px-3 py-2 hover:bg-gray-100">
                                            <img
                                                src="/assets/images/logos/logout.png"
                                                alt="User avatar"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span className="text-sm text-sky-900 font-medium">Đăng xuất</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <hr className="border-gray-500 opacity-50" />
                </div>

                <div id="homeHeader" className="w-full mobile:min-h-[47rem] md:min-h-[35rem] lg:min-h-[30rem]   bg-cover bg-center  text-white flex justify-center items-center">
                    <div
                        className=" w-full lg:w-[90%] max-w-[1000px] text-center sm:mt-[50rem] md:mt-[10rem] lg:mt-[18rem] px-4 header-content">
                        <h1 className="text-2xl lg:text-3xl text-light font-bold mb-8">Khám Phá
                            Việt Nam, Theo Cách Của Bạn</h1>
                        <div className="w-full flex justify-center items-center rounded-[16px] border-[6px] border-gray-100/10 ">
                            <form action method
                                className="w-full bg-white shadow-md rounded-lg p-4 flex flex-col lg:flex-row items-end gap-4">

                                <div className="flex flex-col w-full lg:w-[30%]">
                                    <label className="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Từ</label>
                                    <div className="flex items-center p-2 rounded">
                                        <i className="fas fa-bus text-lg text-sky-700"></i>
                                        <input type="text" placeholder="Nhập điểm đi"
                                            className="outline-none w-full bg-transparent ml-2 py-1 text-blue-950" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full lg:w-[50px] lg:h-[50px]">
                                    <i className="fas fa-exchange-alt text-sky-700 text-lg cursor-pointer hover:text-gray-700"></i>
                                </div>

                                <div className="flex flex-col w-full lg:w-[30%]">
                                    <label className="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Đến</label>
                                    <div className="flex items-center bg-white p-2 rounded">
                                        <i className="fas fa-bus text-lg text-sky-700"></i>
                                        <input type="text" placeholder="Nhập điểm đến"
                                            className="outline-none w-full bg-transparent ml-2 py-1 text-blue-950" />
                                    </div>
                                </div>

                                <div className="flex flex-col w-full lg:w-[30%]">
                                    <label className="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Ngày khởi hành</label>
                                    <div className="flex items-center bg-white p-2 rounded relative">
                                        <i className="fas fa-calendar-alt text-lg text-sky-700 cursor-pointer absolute left-2"
                                            onclick="document.getElementById('departure-date').showPicker()"></i>
                                        <input type="date" id="departure-date"
                                            className="outline-none w-full bg-transparent pl-8 text-blue-950 cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:hidden" />
                                    </div>
                                </div>

                                <button
                                    className="bg-orange-500 hover:bg-orange-600 w-full lg:w-[50px] lg:h-[50px] text-white rounded transition duration-300">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>

                        </div>

                        <div
                            className="w-full md:w-[80%] flex flex-wrap items-center gap-2 mt-4 text-white justify-start">
                            <span className="font-bold">Tìm kiếm</span>
                            <a href="#"
                                className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded text-sm">Khám
                                phá ý tưởng chuyến đi</a>
                            <a href="#"
                                className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded text-sm">Tin
                                tức</a>
                        </div>
                    </div>
                </div>


            </header>
            <nav className="nav-drill">
                <ul className="nav-items nav-level-1 font-bold">

                    <li className="nav-item">
                        <Link to="/" className="nav-link linkmenu !text-orange-600" href="#">
                            Trang chủ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tra-cuu-ve" className="nav-link linkmenu" href="#">
                            Tra cứu vé
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/tin-tuc" className="nav-link linkmenu" href="#">
                            Tin tức
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to="/lich-trinh" className="nav-link linkmenu" href="#">
                            Lịch trình
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ve-chung-toi" className="nav-link linkmenu" href="#">
                            Về chúng tôi
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lien-he" className="nav-link linkmenu" href="#">
                            Liên hệ
                        </Link>
                    </li>

                    <li className="nav-item nav-expand">
                        <p className="nav-link linkmenu nav-expand-link">
                            Tài khoản
                        </p>
                        <ul className="nav-items nav-expand-content">
                            <li className="nav-item">
                                <Link to="/dang-nhap" className="nav-link" href="#">
                                    Đăng nhập
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dang-ky" className="nav-link" href="#">
                                    Đăng ký
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/thong-tin-tai-khoan" className="nav-link" href="#">
                                    Thông tin tài khoản
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/lich-su-dat-ve" className="nav-link" href="#">
                                    Lịch sử đặt vé
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item ">
                        <button className="text-left nav-link w-[100%] hover:text-red-700 text-sky-700" >
                            Đăng xuất
                        </button>
                    </li>

                </ul>
            </nav>


        </>
    )
}

export default Header;