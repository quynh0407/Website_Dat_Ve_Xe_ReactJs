function Bus (){
    return (
        <main class="mx-auto w-full md:w-[80%] flex pb-3 " id="busDetail">
            <div class="w-[40%] bg-white p-4 rounded-lg">
                <div class="w-full">
                    <div class="flex p-4 justify-between">
                        <span class="font-bold text-[20px]">Bộ lọc tìm kiếm </span>
                        <span class="text-[18px] text-orange-600"><a href="">Bỏ lọc</a></span>
                       
                    </div>
                    <div class>
                        <span class="text-[19px] p-4">Giờ đi</span>
                        <div class="grid grid-cols-1 pl-4">
                            <div class="flex pt-2">
                                <div class><input class="ant checkbox input mt-2"
                                        type="checkbox" name id/></div>
                                <div class="ml-2 text-[18px]">Sáng sớm 00:00 -
                                    06:00(0)</div>
                            </div>
                            <div class="flex pt-2">
                                <div class><input class="ant checkbox input mt-2"
                                        type="checkbox" name id/></div>
                                <div class="ml-2 text-[18px]">Buổi sáng 06:00 - 12:00
                                    (0)</div>
                            </div>
                            <div class="flex pt-2">
                                <div class><input class="ant checkbox input mt-2"
                                        type="checkbox" name id/></div>
                                <div class="ml-2 text-[18px]">Buổi chiều 12:00 - 18:00
                                    (0)</div>
                            </div>
                            <div class="flex pt-2 ">
                                <div class="">
                                    <input class="ant checkbox input mt-2"
                                        type="checkbox" name id/></div>
                                <div class="ml-2 text-[18px]">Buổi tối 18:00 - 24:00
                                    (0)</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4"><span class="text-[19px]">Loại xe</span><div
                            class="mt-4 flex flex-wrap gap-2">
                            <a href>
                                <div
                                    class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[18px] font-normal border-[#FCDACE] bg-[#FEF6F3] text-orange">Ghế
                                </div></a>
                            <a href>
                                <div
                                    class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[18px] font-normal border-[#FCDACE] bg-[#FEF6F3] text-orange">Giường
                                </div></a>
                            <a href>
                                <div
                                    class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[18px] font-normal border-[#FCDACE] bg-[#FEF6F3] text-orange">Limousine
                                </div></a>
                        </div>
                    </div>

                    <div class="p-4 pb-6">
                        <span class="text-[19px]">Tầng</span>
                        <div
                            class="mt-4 flex flex-wrap gap-2">
                            <a href>
                                <div
                                    class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[18px] font-normal border-[#FCDACE]">Tầng
                                    trên</div></a>
                            <a href>
                                <div
                                    class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[18px] font-normal border-[#FCDACE]">Tầng
                                    dưới</div></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[60%] p-4 w-full">
                <h1 class="font-awesome text-2xl font-bold pt-4">ANKHE - TP.
                    Hồ Chí Minh (2)</h1>
                <div class="bg-white p-4 pl-8 pr-8 rounded-lg mt-8">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div class="grid grid-cols-1 ">
                                <span
                                    class="font-bold text-4xl p-2">13:30</span>
                                <span class="text-[15px]">An Khe - Vinh
                                    Long</span>
                            </div>

                            <div class="flex">
                                <div class="flex">
                                    <img class="w-4 mb-8"
                                        src="https://futabus.vn/images/icons/pickup.svg"
                                        alt/>
                                    <hr
                                        class="border-t-2 border-dashed border-gray-500 w-18 mt-8 "/>
                                </div>
                                <div class="text-[15px] p-2 pt-4">13 giờ</div>
                                <div class="flex">
                                    <hr
                                        class="border-t-2 border-dashed border-gray-500 w-18 mt-8 "/>
                                    <img class="w-4 mb-8"
                                        src="https://futabus.vn/images/icons/station.svg"
                                        alt/>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 ">
                                <span
                                    class="font-bold text-4xl p-2">17:30</span>
                                <span class="text-[15px]">An Minh (Kiên Giang) -
                                    TP.Hồ Chí Minh</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 justify-between">
                            <div class>
                            </div>
                            <span
                                class="p-2 text-xl pt-15 font-bold text-orange-600 ">200.0000đ</span>
                        </div>
                    </div>
                    <hr class="border-gray-300"/>
                    <div class="flex pt-4 justify-between">
                        <div class="flex">
                            <div class="flex">
                                <div
                                    class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3] mt-5"></div>
                                <span
                                    class="p-2 text-[18px] text-gray-700">Limousine</span>
                            </div>
                            <div class="flex">
                                <div
                                    class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3] mt-5"></div>
                                <span class="p-2 text-[18px] text-green-700">32
                                    chỗ trống</span>
                            </div>
                        </div>
                        <button
                            class="p-2 pl-6 pr-6 bg-orange-500 rounded-[30px] text-white"><a href="/bookingTicket">Chọn
                                chuyến</a></button>
                    </div>
                    <div class></div>
                </div>

                <div class="bg-white p-4 pl-8 pr-8 rounded-lg mt-8">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div class="grid grid-cols-1 ">
                                <span
                                    class="font-bold text-4xl p-2">13:30</span>
                                <span class="text-[15px]">ANKHE - TP. Hồ Chí
                                    Minh</span>
                            </div>

                            <div class="flex">
                                <div class="flex">
                                    <img class="w-4 mb-8"
                                        src="https://futabus.vn/images/icons/pickup.svg"
                                        alt/>
                                    <hr
                                        class="border-t-2 border-dashed border-gray-500 w-18 mt-8 "/>
                                </div>
                                <div class="text-[15px] p-2 pt-4">13 giờ</div>
                                <div class="flex">
                                    <hr
                                        class="border-t-2 border-dashed border-gray-500 w-18 mt-8 "/>
                                    <img class="w-4 mb-8"
                                        src="https://futabus.vn/images/icons/station.svg"
                                        alt/>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 ">
                                <span
                                    class="font-bold text-4xl p-2">18:30</span>
                                <span class="text-[15px]">ANKHE - TP. Hồ Chí
                                    Minh</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 justify-between">
                            <div class>
                            </div>
                            <span
                                class="p-2 text-xl pt-15 font-bold text-orange-600 ">200.0000đ</span>
                        </div>
                    </div>
                    <hr class="border-gray-300"/>
                    <div class="flex pt-4 justify-between">
                        <div class="flex">
                            <div class="flex">
                                <div
                                    class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3] mt-5"></div>
                                <span
                                    class="p-2 text-[18px] text-gray-700">Limousine</span>
                            </div>
                            <div class="flex">
                                <div
                                    class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3] mt-5"></div>
                                <span class="p-2 text-[18px] text-green-700">32
                                    chỗ trống</span>
                            </div>
                        </div>
                        <button
                            class="p-2 pl-6 pr-6 bg-orange-500 rounded-[30px] text-white">Chọn
                            chuyến</button>
                    </div>
                    <div class></div>
                </div>
            </div>
        </main>
    )
}
export default Bus;