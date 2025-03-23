function Header (){
    return(
        <header class="p-0 mb-3">
            <div class="menu fixed top-0 left-0 w-full z-50" id="menu">
                <div
                    class="menu-top flex justify-between w-[80%] lg:w-[80%] mx-auto items-center py-4">
                    <div class="menu-top-left font-bold text-2xl">
                        <img src="/assets/images/main/logo.png" alt
                            class="w-1/2 md:w-[50%]"/>
                    </div>
                    <div class="menu-top-right flex p-2">
                        <ul
                            class="flex flex-col md:flex-row gap-4 justify-between list-none items-center">
                            <li
                                class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md"><a
                                    href="#">Hỗ trợ</a></li>
                            <li
                                class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md"><a
                                    href="#">Đặt chỗ của
                                    tôi</a></li>
                           <li
                                class="border border-white rounded-lg px-4 py-2 hover:bg-black/10 cursor-pointer"><a
                                    href="login.html" class="no-underline"><i
                                        class="fas fa-user mr-2"></i> Đăng
                                    ký</a></li>
                            <li
                                class="rounded-lg px-4 py-2 bg-sky-500 hover:text-white transition duration-300 font-bold hover:bg-sky-600/50">
                                <a href="register.html" class="no-underline">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="border-gray-500 opacity-50"/>
                <div
                    class="menu-bottom flex justify-start w-[80%] lg:w-[80%] mx-auto items-center py-1">
                    <ul
                        class="flex flex-wrap gap-4 justify-center md:justify-start list-none items-center font-bold">
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Đặt
                            vé xe</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Về
                            chúng tôi</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md"><a
                                href="./bus.html">Lịch trình</a></li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Tin
                            tức</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Liên
                            hệ</li>
                    </ul>
                </div>
                <hr class="border-gray-500 opacity-50"/>
            </div>

            <div id="mobileMenu" class=" w-full z-50 bg-[#043175] text-white ">
                <div
                    class="menu-top flex justify-between w-[90%] mx-auto items-center py-4">
                    <div class="menu-top-left font-bold text-2xl">
                        <img src="../../public/assets/images/main/logo.png"
                            alt="Logo" class="w-1/2 md:w-[50%]"/>
                    </div>

                    <button id="menu-toggle"
                        class="block md:hidden p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-gray-700" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <hr class="border-gray-500 opacity-50"/>

                <div id="mobileDropdownMenu" class="hidd shadow-md">
                    <ul class="flex flex-col text-center font-bold py-4">
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Đặt
                            vé xe</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Về
                            chúng tôi</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md"><a
                                href="./bus.html">Lịch trình</a></li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Tin
                            tức</li>
                        <li
                            class="hover:bg-black/10 px-4 py-2 cursor-pointer rounded-md">Liên
                            hệ</li>
                    </ul>
                </div>
            </div>

            <div
                class="w-full h-[300px] md:h-[500px] bg-cover bg-center relative text-white flex justify-center items-center">
                <div
                    class="absolute w-full md:w-3/4 max-w-[1000px] text-center mt-[13%] px-4 header-content">
                    <h1 class="text-2xl md:text-4xl font-bold mb-8">Khám Phá
                        Việt Nam, Theo Cách Của Bạn</h1>
                    <div
                        class="w-full flex justify-center items-center rounded-[16px] border-[6px] border-gray-100/10">
                        <form action method
                            class="w-full bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-end gap-4">
                            <div class="flex flex-col w-full md:w-[30%]">
                                <label
                                    class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Từ</label>
                                <div class="flex items-center p-2 rounded">
                                    <i
                                        class="fas fa-bus text-lg text-sky-700"></i>
                                    <input type="text"
                                        placeholder="Nhập điểm đi"
                                        class="outline-none w-full bg-transparent ml-2 py-1 text-blue-950"/>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-center w-full md:w-[5%]">
                                <i
                                    class="fas fa-exchange-alt text-sky-700 text-lg cursor-pointer hover:text-gray-700"></i>
                            </div>
                            <div class="flex flex-col w-full md:w-[30%]">
                                <label
                                    class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Đến</label>
                                <div
                                    class="flex items-center bg-white p-2 rounded">
                                    <i
                                        class="fas fa-bus text-lg text-sky-700"></i>
                                    <input type="text"
                                        placeholder="Nhập điểm đến"
                                        class="outline-none w-full bg-transparent ml-2 py-1 text-blue-950"/>
                                </div>
                            </div>
                            <div class="flex flex-col w-[30%]">
                                <label
                                    class="text-blue-950 text-sm text-left px-2 font-semibold mb-1">Ngày
                                    khởi
                                    hành</label>
                                <div
                                    class="flex items-center bg-white  p-2 rounded relative">
                                    <i
                                        class="fas fa-calendar-alt text-lg text-sky-700 cursor-pointer absolute left-2"
                                        onclick="document.getElementById('departure-date').showPicker()"></i>

                                    <input type="date" id="departure-date"
                                        class="outline-none w-full bg-transparent pl-8 text-blue-950 cursor-pointer 
                                 appearance-none [&::-webkit-calendar-picker-indicator]:hidden"/>
                                </div>
                            </div>
                            <button
                                class="bg-orange-500 hover:bg-orange-600 w-full md:w-[5%] text-white p-3 rounded transition duration-300">
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

            <div class="w-full text-center mb-7">
                <div id="comment-container"
                    class="inline-block bg-gray-100 p-3 rounded-lg text-sm text-gray-700 italic">
                    <p>“Tuyến Sài Gòn - Đà Lạt dịch vụ tốt, tài xế vui vẻ, xe
                        sạch sẽ! ⭐⭐⭐⭐⭐”</p>
                </div>
            </div>

        </header>
    )
}

export default Header;