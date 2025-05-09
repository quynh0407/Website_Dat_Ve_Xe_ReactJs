import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import React from "react";
import '../../../styles/client/scss/pages/home.scss';

function Header() {
    return (
        <>
            <header class="p-0 pb-2 mb-3 mobile:min-h-[47rem] md:min-h-[35rem] lg:min-h-[35rem] " >
                <div class="menu fixed top-0 left-0 w-full z-50" id="menu">
                    <div class="menu-top flex justify-between w-[80%] lg:w-[80%] mx-auto items-center py-4">
                        <div class="menu-top-left font-bold text-2xl">
                            <img src="/assets/images/main/logo.png" alt class="w-1/2 lg:w-[150px] md:w-[100px] " />
                        </div>
                        <div class="menu-top-right flex p-2">
                            <ul class="flex flex-row flex-nowrap gap-4 justify-between list-none items-center text-base md:text-[1rem] lg:text-[1rem]">
                                <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md whitespace-nowrap">
                                    <a href="#">Hỗ trợ</a>
                                </li>
                                <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md whitespace-nowrap">
                                    <a href="#">Đặt chỗ của tôi</a>
                                </li>
                                <li class="border border-white rounded-lg px-4 py-2 hover:bg-black/10 whitespace-nowrap">
                                    <Link to="/dang-ky" class="no-underline">
                                        <i class="fas fa-user mr-2"></i> Đăng ký
                                    </Link>
                                </li>
                                <li class="rounded-lg px-4 py-2 bg-sky-500 hover:text-white transition duration-300 font-bold hover:bg-sky-600/50 whitespace-nowrap">
                                    <Link to="/dang-nhap" class="no-underline">Đăng nhập</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr class="border-gray-500 opacity-50" />
                    <div class="menu-bottom flex justify-start w-[80%] lg:w-[80%] mx-auto items-center py-1">
                        <ul class="flex flex-wrap gap-4 justify-center md:justify-start list-none items-center font-bold">
                            <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Đặt
                                vé xe</li>
                            <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Về
                                chúng tôi</li>
                            <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md"><a href="./bus.html">Lịch
                                trình</a></li>
                            <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Tin
                                tức</li>
                            <li class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Liên
                                hệ</li>
                        </ul>
                    </div>
                    <hr class="border-gray-500 opacity-50" />
                </div>

                <div id="mobileMenu" class=" w-full z-50 bg-[#043175] text-white ">
                    <div class="menu-top flex justify-between w-[90%] mx-auto items-center py-4">
                        <button type="submit" class="hamburger material-icons" id="ham-main">menu</button>

                        <div class="menu-top-left font-bold w-[14%] ">
                            <img src="/assets/images/main/logo.png" alt="Logo" class=" w-[100%]" />
                        </div>
                        <button class="hamburger-button" id="ham-user" aria-label="User menu">
                            <span class="material-icons">account_circle</span>
                        </button>



                    </div>

                    <hr class="border-gray-500 opacity-50" />
                </div>

                <div
                    class="w-full h-[300px] md:h-[100%] mobile:[100%]  bg-cover bg-center  text-white flex justify-center items-center">
                    <div
                        class=" w-full lg:w-[90%] max-w-[1000px] text-center sm:mt-[50rem] md:mt-[10rem] lg:mt-[30rem] px-4 header-content">
                        <h1 class="text-2xl lg:text-3xl text-light font-bold mb-8">Khám Phá
                            Việt Nam, Theo Cách Của Bạn</h1>
                        <div class="w-full flex justify-center items-center rounded-[16px] border-[6px] border-gray-100/10 ">
                            <form action method
                                class="w-full bg-white shadow-md rounded-lg p-4 flex flex-col lg:flex-row items-end gap-4">

                                <div class="flex flex-col w-full lg:w-[30%]">
                                    <label class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Từ</label>
                                    <div class="flex items-center p-2 rounded">
                                        <i class="fas fa-bus text-lg text-sky-700"></i>
                                        <input type="text" placeholder="Nhập điểm đi"
                                            class="outline-none w-full bg-transparent ml-2 py-1 text-blue-950" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-center w-full lg:w-[50px] lg:h-[50px]">
                                    <i class="fas fa-exchange-alt text-sky-700 text-lg cursor-pointer hover:text-gray-700"></i>
                                </div>

                                <div class="flex flex-col w-full lg:w-[30%]">
                                    <label class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Đến</label>
                                    <div class="flex items-center bg-white p-2 rounded">
                                        <i class="fas fa-bus text-lg text-sky-700"></i>
                                        <input type="text" placeholder="Nhập điểm đến"
                                            class="outline-none w-full bg-transparent ml-2 py-1 text-blue-950" />
                                    </div>
                                </div>

                                <div class="flex flex-col w-full lg:w-[30%]">
                                    <label class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Ngày khởi hành</label>
                                    <div class="flex items-center bg-white p-2 rounded relative">
                                        <i class="fas fa-calendar-alt text-lg text-sky-700 cursor-pointer absolute left-2"
                                            onclick="document.getElementById('departure-date').showPicker()"></i>
                                        <input type="date" id="departure-date"
                                            class="outline-none w-full bg-transparent pl-8 text-blue-950 cursor-pointer appearance-none [&::-webkit-calendar-picker-indicator]:hidden" />
                                    </div>
                                </div>

                                <button
                                    class="bg-orange-500 hover:bg-orange-600 w-full lg:w-[50px] lg:h-[50px] text-white rounded transition duration-300">
                                    <i class="fas fa-search"></i>
                                </button>
                            </form>

                        </div>

                        <div
                            class="w-full md:w-[80%] flex flex-wrap items-center gap-2 mt-4 text-white justify-start">
                            <span class="font-bold">Tìm kiếm</span>
                            <a href="#"
                                class="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded text-sm">Khám
                                phá ý tưởng chuyến đi</a>
                            <a href="#"
                                class="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded text-sm">Tin
                                tức</a>
                        </div>
                    </div>
                </div>


            </header>
            <nav class="nav-drill">
                <ul class="nav-items nav-level-1 font-bold">

                    <li class="nav-item">
                        <Link to="/" class="nav-link linkmenu !text-orange-600" href="#">
                            Trang chủ
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Tra cứu vé
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Về chúng tôi
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Tin tức
                        </a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Lịch trình
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Về chúng tôi
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkmenu" href="#">
                            Liên hệ
                        </a>
                    </li>

                    <li class="nav-item nav-expand">
                        <a class="nav-link linkmenu nav-expand-link" href="#">
                            Tài khoản
                        </a>
                        <ul class="nav-items nav-expand-content">
                            <li class="nav-item">
                                <Link to="/dang-nhap" class="nav-link" href="#">
                                    Đăng nhập
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dang-ky" class="nav-link" href="#">
                                    Đăng ký
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Thông tin tài khoản
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Lịch sử đặt vé
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item ">
                        <button class="text-left nav-link w-[100%] hover:bg-red-500 hover:text-white" href="#">
                            Đăng xuất
                        </button>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Header;